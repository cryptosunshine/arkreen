
import { ClockCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import GameApi from "@/utils/backend/GameApi";
import { formatBlockStatusIcon, formatDate, formatPoolTypeIcon } from "@/utils/DataFormatUtils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import moment from 'moment'
import ArkreenNativeTable from "@/components/table/ArkreenNativeTable";

export default function Home() {
  const pageSize = 25
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [dataList,setDataList] = useState<any[]>()

  const titleList = [
    {
      name:'BTC Highlight',
      key:'id',
      style:{textAlign:'left',paddingLeft:'16px',borderTopLeftRadius:'8px',borderBottomLeftRadius:'8px',background:'#DEF5EF'}
    },
    {
      name:'矿池',
      key:'guessed_miner',
      style:{textAlign:'left',background:'#DEF5EF'}
    },
    {
      name:'时间戳',
      key:'time',
      style:{textAlign:'left',background:'#DEF5EF'}
    },
    {
      name:'耗电量（kWh）',
      key:'power',
      style:{textAlign:'center',background:'#DEF5EF'}
    },
    {
      name:'ART数量',
      key:'cell_count',
      style:{textAlign:'center',background:'#DEF5EF'}
    },
    {
      name:'状态',
      key:'status',
      style:{textAlign:'center',paddingRight:'16px',borderTopRightRadius:'8px',borderBottomRightRadius:'8px',background:'#DEF5EF'}
    },
  ]
  //
  async function initTableList() {
    const data = {
      pageSize:pageSize,
      offset:currentPage
    }
    setLoading(true)
    const listData:any[] = []
    console.log(data)
    const resp:any = await GameApi.getBtcBlockList(data);
    if(!resp.error && resp.result){
      resp.result.blockList.forEach((element:any) => {
        //
        const start_index = element.start_index
        const end_index = element.end_index
        let cell = ''
        if(end_index-start_index == 1){
          cell = start_index
        }else {
          cell = start_index +' - '+(end_index-1)
        }
        const robot = {
          key:element.hash,
          id:<span style={{fontSize:'18px',fontWeight:600,color:'#0072DB',display:'block',textAlign:'left',paddingLeft:'16px'}}>{element.id}</span>,
          power:<span style={{fontSize:'18px',fontWeight:500,color:'#1D1D20'}}>{element.status==0?'/':<span>{Number(element.power).toFixed(3)}</span>}</span>,
          cell_count: element.status==0?'/':element.cell_count,
          time: <span style={{fontSize:'18px',fontWeight:500,color:'#1D1D20',display:'block',textAlign:'left'}}>{formatDate(Number(moment(element.time).utc(true).format('X')),'yyyy-MM-dd HH:mm:ss')}</span>,
          cell: <span style={{fontSize:'18px',fontWeight:500,color:'#1D1D20'}}>{element.status==0?'/':cell}</span>,
          status:formatBlockStatusIcon(element.status),
          guessed_miner:<span style={{fontSize:'18px',fontWeight:600,color:'#1D1D20',display:'block',textAlign:'left'}}>{formatPoolTypeIcon(element.guessed_miner)}{' '+element.guessed_miner}</span>,
        }
        listData.push(robot)
      });
    }
    setDataList(listData)
    setLoading(false)
  }
  //
  useEffect(() => {
    if(!router.asPath.includes('page')){
      setCurrentPage(1)
    }
    const page = searchParams.get('page')
    if(page){
      console.log('page:'+page)
      setCurrentPage(Number(page))
    }
  },[searchParams])//eslint-disable-line
  useEffect(() => {
    if(currentPage){
      initTableList();
      console.log('currentPage:'+currentPage)
    }
  },[currentPage])//eslint-disable-line
  //
  return (
    <>
      <div style={{borderRadius:'8px',color:'var(--arkreen-text-primary)'}}>
        <div style={{background:'#FFFFFF',borderRadius:'8px',padding:'16px',color:'var(--arkreen-text-primary)'}}>
          <div style={{fontSize:'32px',fontWeight:600}}>Bitcoin network power demand</div>
          <div style={{fontSize:'16px',fontWeight:500,paddingBlock:'16px',color:'#80808B'}}><ClockCircleOutlined /> updated every block</div>
          <ArkreenNativeTable dataList={dataList?dataList:[]} titleList={titleList} pageSize={pageSize} loading={loading} currentPage={currentPage}/>
        </div>
      </div>
    </>
  )
}
