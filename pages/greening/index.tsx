import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {Avatar, Image, message, Modal} from 'antd';
import greeningImg from '../../public/images/greening-img.png'
import ArkreenNativeButton from "@/components/button/ArkreenNativeButton";
import { ArrowDownMinerIcon, RightIcon, USDTIcon } from "@/components/icons/ArkreenIcon";
import ArkreenInput from "@/components/input/ArkreenInput";
import GameApi from "@/utils/backend/GameApi";
import { useAccount } from "wagmi"
import {useConnectModal} from '@rainbow-me/rainbowkit';
import WalletUtils from "@/utils/WalletUtils";
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import {LoadingOutlined} from "@ant-design/icons";




export default function Home() {
  const addRecentTransaction = useAddRecentTransaction()
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount()
  const searchParams =useSearchParams()
  const utm = new URLSearchParams(searchParams.toString())
  const [currentPage, setCurrentPage] = useState(utm.get("page") ? Number(utm.get("page")) : 1)
  const [payNumber,setPayNumber] = useState<number>(1)
  const [randomHeight,serRandomHeight] = useState<number>(Math.ceil(Math.random() * 1000))
  const [btnText,setBtnText] = useState<any>('Green')
  const [isGreening,setIsGreening] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nftInfo, setNftInfo] = useState<any>();
  async function green() {

    if (isConnected) {
      setIsGreening(true)
      setBtnText(<span><LoadingOutlined /> Get Signature...</span>)
      const resp: any = await GameApi.queryAuthorizationAsGreenActor('' + address, randomHeight)
      console.log(resp)
      if(!resp.error && resp.result){
        const result = resp.result
        // height:number,energyStr:string,cellCount:number,blockTime:string,beneficiary:string,greenType:number,sig:any,
        const v = result.sig.v
        const r = result.sig.r
        const s = result.sig.s
        setBtnText(<span><LoadingOutlined /> Greening...</span>)
        //
        try {
          const resultData = await WalletUtils.authMintGreenBTC(result.block,result.energy,result.cellCount,result.time,result.actor,2,[v,r,s])
          const hash = resultData.hash
          console.log(hash)
          addRecentTransaction({hash: hash, description: 'Green Block'});
          const transactionResult:any = await WalletUtils.waitTransaction(hash)
          if(transactionResult.status==1 || transactionResult.status == 'success'){
            //message.success('Green successful')
            //
            const tokenURI = await WalletUtils.tokenURI(result.block)
            if (tokenURI) {
              const baseStr = tokenURI.toString().replaceAll('data:application/json;base64,','')
              setNftInfo(JSON.parse(atob(baseStr)))
            }
            //
            setIsModalOpen(true)
          }else{
            message.error('Green failed')
          }
        }catch (e) {
          message.warning('User rejected transaction')
        }
      }else {
        message.error('获取签名失败！')
      }
      setBtnText('Green')
      setIsGreening(false)
    } else {
      openConnectModal?.()
    }
  }

  function onPayChange(params:any) {
    setPayNumber(params.target.value)
  }

  function closeModal(){
    setIsModalOpen(false)
    serRandomHeight(Math.ceil(Math.random() * 1000))
  }

  async function test() {
    const tokenURI = await WalletUtils.tokenURI(67245)
    console.log(tokenURI)
    if (tokenURI) {
      const baseStr = tokenURI.toString().replaceAll('data:application/json;base64,','')
      const data = atob(baseStr)
      console.log(data)
      setNftInfo(JSON.parse(data))
    }
  }
  
  useEffect(() => {
    test()
  },[])//eslint-disable-line
  //
  return (
    <div style={{borderRadius:'8px',color:'var(--arkreen-text-primary)'}}>
      <div style={{background:'#FFFFFF',borderRadius:'8px',padding:'32px',color:'var(--arkreen-text-primary)',height:'calc(100vh - 160px)'}}>
        <div style={{fontSize:'32px',fontWeight:600}}>Greening</div>
        <div style={{justifyContent: 'center',alignItems: 'center',display:'flex',height:'100%'}}>
          

          <div style={{display:'flex',gap:'16px'}}>
            <div style={{flex:1}}>
              
            </div>
            <div style={{justifyContent: 'center',alignItems: 'center',display:'flex'}}>
              <div style={{width:'408px',height:'408px',padding:'46px'}}>
                  <Avatar src={greeningImg.src} style={{width:'100%',height:'100%'}} shape="square" />
              </div>
            </div>
            <div style={{padding:'36px',display:'flex',flexDirection:'column',gap:'40px'}}>
              <div style={{width:'488px',padding:'48px',display:'flex',flexDirection:'column',gap:'48px',border:'1px solid #CBCBD2',borderRadius:'32px'}}>
                
                <div>
                  <div style={{color:'#80808B',fontSize:'16px',fontWeight:500}}>You Pay</div>
                  <div style={{display:'flex',color:'#585862',fontSize:'28px',fontWeight:700,cursor:'pointer'}}>
                    <div style={{flex:1}}><ArkreenInput onChange={(target:any) => onPayChange(target)} type="number" defaultValue={payNumber} style={{color:'#585862',fontSize:'28px',fontWeight:700}} /></div>
                    <div style={{display:'flex',gap:'16px'}}>
                      <div><USDTIcon /></div><div>USDT</div><div><RightIcon /></div>
                    </div>
                  </div>
                </div>

                <div style={{display:'flex'}}>
                  <div style={{flex:1,display:'flex',flexDirection:'column'}}>
                    <div style={{flex:13,borderBottom:'1px solid #CBCBD2'}}></div>
                    <div style={{flex:11}}></div>
                  </div>
                  <div style={{paddingInline:'8px'}}><ArrowDownMinerIcon /></div>
                  <div style={{flex:1,display:'flex',flexDirection:'column'}}>
                    <div style={{flex:13,borderBottom:'1px solid #CBCBD2'}}></div>
                    <div style={{flex:11}}></div>
                  </div>
                </div>

                <div>
                  <div style={{color:'#80808B',fontSize:'16px',fontWeight:500}}>You Get</div>
                  <div style={{display:'flex',color:'#585862',fontSize:'28px',fontWeight:700}}>
                    <div style={{flex:1}}>{payNumber*1000}</div>
                    <div style={{display:'flex',gap:'16px'}}>
                      <div>kWh</div><div><RightIcon /></div>
                    </div>
                  </div>
                </div>

              </div>
              <div style={{textAlign:'center'}}>
                <ArkreenNativeButton disabled={isGreening} style={{width:'400px'}} onClick={() => green()}>{btnText}</ArkreenNativeButton>
              </div>
            </div>
            <div style={{flex:1}}>
              
            </div>
          </div>

        </div>

      </div>
      <Modal title="Green successful" open={isModalOpen} onOk={() => closeModal()} footer={null}>
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          <div style={{color:'#101010',textAlign:'center'}}>
            {
              nftInfo?<Image src={nftInfo.image} alt='nft image' />:<></>
            }
          </div>
          <div style={{textAlign:'center'}}>View this NFT in <a target='_blank' href={'https://testnets.opensea.io/assets/mumbai/0xcac6cae0122aca84d26e89a49ffd71b120dbfad9/'+randomHeight} style={{color:'var(--arkreen-green)'}}>OpenSea</a></div>
          <div style={{textAlign:'center'}}><ArkreenNativeButton onClick={() => closeModal()}>OK</ArkreenNativeButton></div>
        </div>
      </Modal>
    </div>
  )
}
