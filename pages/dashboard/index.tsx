import React,{ useState,useEffect  } from 'react';
import { useAccount  } from 'wagmi'
import moment from 'moment'
import { Col, Row } from 'antd';
import DetailPage from '@/styles/DetailPage.module.css'
import {MinerLineIcon,ImpactLineIcon,GreenEnergyLineIcon,PvCapacityLineIcon,CO2Icon,RewardDashboardIcon,CapacityIcon,WithdrawIcon,BalanceIcon, DiscordIcon} from '../../components/icons/ArkreenIcon'
import ArkreenMinCard from '@/components/dashboard/ArkreenMinCard'
import ArkreenOverviewCard from '@/components/dashboard/ArkreenOverviewCard'
// import ArkreenStackAreaChart from '@/components/dashboard/ArkreenStackAreaChart'
import ArkreenMinViewTable from '@/components/dashboard/ArkreenMinViewTable'
import WalletUtils from '@/utils/WalletUtils'
import {getDates} from '@/utils/DateUtils'
import {formatPower,formatElectricity,formatDate,formatStatusIcon,formatLongString,formatMinerTypeTag,formatVisualizationDate} from '@/utils/DataFormatUtils'
import StatApi from '@/utils/backend/StatApi'
import AccountApi from '@/utils/backend/AccountApi'
import MinerApi from '@/utils/backend/MinerApi';
import { useRouter } from 'next/router';
// import { Roboto_Mono } from 'next/font/google';
// const robotoMono = Roboto_Mono({subsets: ['latin'],display: 'swap'});
// import ArkreenGaUtils from "@/utils/ArkreenGaUtils";//--暂时隐藏
import { useSearchParams } from 'next/navigation'
// import ArkreenAvatar from '@/components/ArkreenAvatar';
import useNetworkGlobal from '@/hooks/useNetworkGlobal';

export default function DashboardContent() {
  const {address } = useAccount()
  const router  = useRouter()
  const [networkInfo,setNetworkInfo] = useState<any>({
    capacity: undefined,
    miners: undefined,
    greenEnergy: undefined,
    reward:undefined,
    co2:undefined ,
  })
  
  const [balance,setBalance] = useState<any>(undefined)
  const [growthDisplay, setGrowthDisplay] = useState('block')
  const [minerList,setMinerList] = useState<any>();
  const [data, setData] = useState<any>([]);
  const [isStat, setStat] = useState(true);
  const searchParams:any = useSearchParams()
  const utm = new URLSearchParams(searchParams!)
  const discordUrl = 'https://discord.com/app'
  const [showDiscord, setShowDiscord] = useState(false);

  const [currentPage, setCurrentPage] = useState(utm.get("page") ? Number(utm.get("page")) : 1)

  const [userInfo,setUserInfo] = useState<any>({
    address: undefined,
    nonce: undefined,
    accountType: undefined,
    earningMint: undefined,
    earningService: undefined,
    withdrawAmount: undefined,
    amountMiner: undefined,
    balance:undefined
  })

  async function statRealTimeByOwnerAddress() {
    const info = {
      capacity: 0,
      miners: 0,
      greenEnergy: 0,
      reward:0,
      co2:'0 ton',
      capacityIncrement: 0,
      minersIncrement: 0,
      greenEnergyIncrement: 0,
      rewardIncrement:0,
    }
    const ownerDailyReward:any = await StatApi.statRealTimeByOwnerAddress(String(address));
    if(!ownerDailyReward.error && ownerDailyReward.code === 200){
      // capacity 为W，实际应该为mW
      info.capacity = ownerDailyReward.result.ratedPowerTotal?ownerDailyReward.result.ratedPowerTotal/1000:0
      info.miners = ownerDailyReward.result.minerTotal?ownerDailyReward.result.minerTotal:0
      info.greenEnergy = ownerDailyReward.result.energyGenerationTotal?ownerDailyReward.result.energyGenerationTotal:0
      info.reward = ownerDailyReward.result.rewardTotal?ownerDailyReward.result.rewardTotal:0
      info.capacityIncrement = ownerDailyReward.result.ratedPowerDailyIncrement?ownerDailyReward.result.ratedPowerDailyIncrement:0
      info.minersIncrement = ownerDailyReward.result.minerDailyIncrement?ownerDailyReward.result.minerDailyIncrement:0
      info.greenEnergyIncrement = ownerDailyReward.result.energyGenerationIncrement?ownerDailyReward.result.energyGenerationIncrement:0
      info.rewardIncrement = ownerDailyReward.result.rewardIncrement?ownerDailyReward.result.rewardIncrement:0
    }

    const co = Number((info.greenEnergy/1000 / 1000)*7.09/10000)
    //info.co2 = Number((info.greenEnergy/1000 / 1000)*7.09/10000).toFixed(3)+' ton';
    if(co<10){
      const temp = Number(co*1000).toFixed(2)
      info.co2 = Number(temp).toLocaleString()+" kg "
    }else {
      info.co2 = Number(Number(co).toFixed(2)).toLocaleString()+" ton "
    }
    setNetworkInfo(info)
  }

  async function getBalance(){
    let balance = 0
    const balanceResult:any = await WalletUtils.etherBalance(String(address),process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS)
    if(balanceResult){
      balance = balanceResult.formatted
    }
    setBalance(Number(balance))
  }

  async function stat(){
    const startTime = formatDate(userInfo.createTime*1000,'yyyyMMdd');
    const endTime = formatDate(Date.now(),'yyyyMMdd');
    const data = {
      address: userInfo.address,
      startTime: startTime,
      endTime:  endTime,
    }
    const dailyReward:any = await StatApi.statOwnerDailyReward(data);
    const days = getDates(new Date(userInfo.createTime*1000), new Date())
    if(dailyReward.error){
      setGrowthDisplay('none');
    }else{
      const dateArr:any = []
      const dailyRewardObj:any = {}
      const dailyEnergyObj:any = {}
      dailyReward.result.forEach((item:any) => {
        dailyRewardObj[item.dataDate] = item.rewardIncrement
        dailyEnergyObj[item.dataDate] = item.energyGenerationIncrement
      });
      const now = formatDate(Date.now(),'yyyy-MM-dd');
      for (let i = 0; i < days.length; i++) {
        const dayStr = moment(days[i]).format('yyyy-MM-DD')
        let reward = 0
        let greenEnergy = 0
        if(now !== dayStr){
          if(dailyRewardObj[dayStr]) {
            reward = Number(dailyRewardObj[dayStr])
          }
          if(dailyEnergyObj[dayStr]) {
            greenEnergy = Number(dailyEnergyObj[dayStr])
          }
        }else {
          reward = Number(networkInfo.rewardIncrement)
          greenEnergy = Number(networkInfo.greenEnergyIncrement)
        }
        dateArr.push({dataDate:dayStr, value:reward, seriesField:'Reward'})
        dateArr.push({dataDate:dayStr, value:greenEnergy/1000, seriesField:'Energy'})
      }
      setData(dateArr)
    }
  }

  const [loadingNetworkGlobal,networkGlobal] = useNetworkGlobal()

  async function getAccountInfo() {
    const rsp:any = await AccountApi.getAccountByAddress(String(address));
      let info = {
        address: 0,
        nonce: 0,
        accountType: 0,
        earningMint: 0,
        earningService: 0,
        withdrawAmount: 0,
        amountMiner: 0,
        balance:0
      }
      if(!rsp.error){
        info = rsp.result
        // info.balance = (Number(info.earningMint)+Number(info.withdrawAmount))
      }else{
        const netInfo = {
          capacity: 0,
          miners: 0,
          greenEnergy: 0,
          reward:0,
          co2:'0 kg '
        }
        setNetworkInfo(netInfo)
        setGrowthDisplay('none');
      }
      setUserInfo(info)
      statRealTimeByOwnerAddress();
  }

  async function getMiner(offset:number) {
    //
    const data = {address:address,limit:10,offset:offset} 
    const result:any = await MinerApi.getMinerListByOwner(data);
    const minerList:any = []
    if(!result.error && result && result.result){
      result.result.forEach((info: any,index: number) => {
        const status =info.status;
        const runStatus =info.runStatus;
        let temp = formatStatusIcon('success','Normal')
        if(status===2){
          if(runStatus === 0){
            temp =  formatStatusIcon('success','Normal')
          }else{
            temp = formatStatusIcon('warning','Abnormal')
          }
        }else if(status===3){
          temp = formatStatusIcon('danger','Terminated')
        }else {
          temp = formatStatusIcon('warning','Abnormal')
        }
        //
        const miner = {
          key:info.address,
          address: <span onClick={() => {goto(info.address)}} style={{cursor: 'pointer',color: '#00913A'}}>{formatLongString(info.address,7,7)}</span>,
          minerType: <span>{formatMinerTypeTag(info.minerType)}</span>,
          status:temp,
          onboardTime: <span>{formatVisualizationDate(info.onboardTime)}</span>,
          //icon:<div style={{width:'44px',height:'44px',background:'#f6f6f9',borderRadius:'8px'}}><ArkreenAvatar collection='bottts-neutral' address={info.address} shape='square' size={44}/></div>,
          icon:<div style={{width:'44px',height:'44px',background:'#f6f6f9',fontSize:'20px',paddingTop:'6px',paddingLeft:'12px',borderRadius:'8px'}}><MinerLineIcon/></div>,
          minerAcerInfo:{
            address:info.address,
            onboardTime: info.onboardTime
          }
        }
        minerList.push(miner)
      })
    }
    setMinerList(minerList)
  }

  function goto(label:string){
    router.push(`/miners/${label}`)// , { state: { fromHome: true } }
  }

  function toLocaleString(value:any){
    return Number(Number(value).toFixed(3)).toLocaleString();
  }

  function onPageChange(page: number, pageSize: number){
    setCurrentPage(page)
    getMiner(page);
  }

  useEffect(() => { 
    if(userInfo && userInfo.createTime && networkInfo.rewardIncrement && data.length<=0){
      if(isStat){
        setStat(false)
        stat();
      }
    }
  },[networkInfo?.rewardIncrement])//eslint-disable-line
  
  //--暂时隐藏
//   useEffect(() => {
//     ArkreenGaUtils.openDashboardPage(address)
//   },[])//eslint-disable-line

  useEffect(() => { 
    getBalance();
    getAccountInfo();
    getMiner(currentPage);
  },[])//eslint-disable-line

  return (
    <>
      <Row gutter={[20,20]}>
        <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
          <ArkreenMinCard style={{paddingRight:'16px'}} title='PV Capacity' icon={<PvCapacityLineIcon/>} content={networkInfo.capacity!=undefined?formatPower(Number(networkInfo.capacity),1):''}/>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
          <ArkreenMinCard style={{paddingRight:'12px'}} title='Green Energy' icon={<GreenEnergyLineIcon/>} content={networkInfo.greenEnergy!==undefined?formatElectricity(Number(networkInfo.greenEnergy),1):''}/>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
          <ArkreenMinCard style={{paddingRight:'16px'}} title='Miners' icon={<MinerLineIcon/>} content={networkInfo.miners!==undefined?Number(networkInfo.miners).toLocaleString():''}/>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
          <ArkreenMinCard style={{paddingRight:'16px',background:"#E6F4EB"}} title='Impact' icon={<ImpactLineIcon/>} content={networkInfo.co2!==undefined?<span><span>{networkInfo.co2}</span><span><CO2Icon /></span></span>:''} titleColor="#33A761" valueColor="#00913A"/>
        </Col>
      </Row>
      <div style={{display:growthDisplay}} className={DetailPage['detail-table-box-tx']+' '+DetailPage['detail-table-box']}>
        {/* <ArkreenStackAreaChart height='192px' title='Energy & Rewards' data={data} xField='dataDate' yField='value' seriesField='seriesField' lineColor={['#1EAAF9','#00913A']} /> */}
      </div>
      <Row gutter={[20,20]}>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          {/* <ArkreenOverviewCard 
            title='Overview' 
            content={
              [
                {title:'Rewards',value:networkInfo.reward!==undefined?toLocaleString(networkInfo.reward)+' tAKRE':networkInfo.reward,icon:<RewardDashboardIcon/>},
                {title:'Withdrawable',value:userInfo.earningMint!==undefined?toLocaleString(userInfo.earningMint)+' tAKRE':undefined,icon:<WithdrawIcon/>},
                {title:'Balance',value:balance!==undefined?toLocaleString(balance)+' tAKRE':undefined,icon:<BalanceIcon/>}
              ]
            } /> */}
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <ArkreenOverviewCard 
            title='Global' 
            content={
              [
                {title:'Capacity',value:(!loadingNetworkGlobal && (networkGlobal.capacity!==undefined))?formatPower(Number(networkGlobal.capacity/1000)):undefined,icon:<CapacityIcon/>},
                {title:'Energy',value:(!loadingNetworkGlobal && (networkGlobal.greenEnergy!==undefined))?formatElectricity(Number(networkGlobal.greenEnergy)):undefined,icon:<GreenEnergyLineIcon/>},
                {title:'Miners',value:(!loadingNetworkGlobal && (networkGlobal.miners!==undefined))?Number(networkGlobal.miners).toLocaleString():undefined,icon:<MinerLineIcon/>}
              ]
            } />
        </Col>
        <Col className="gutter-row" xs={24} xxl={24}>
          <ArkreenMinViewTable title='Miners' dataList={minerList} currentPage={currentPage} onPageChange={onPageChange}/>
        </Col>
      </Row>
      <div style={{position:'absolute',right:'24px',bottom:'10%',display:'none'}}>
        <div style={{fontSize:'45px',cursor:'pointer'}}><DiscordIcon/></div>
      </div>
      
    </>
  )
}
