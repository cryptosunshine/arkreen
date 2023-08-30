import {LeftIcon,RightIcon} from '@/components/icons/ArkreenIcon'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import GameApi from "@/utils/backend/GameApi";
import Loading from '@/components/loading';
import Empty from "@/components/empty";
import { useWindowSize } from "@/utils/BrowserUtils";
import ArkreenPaginationStyle from '../../styles/ArkreenPagination.module.css'

export default function Home() {
  const cellGap = 20
  const cellSize = 84
  const router = useRouter()
  const searchParams =useSearchParams()
  const [loading, setLoading] = useState(true)
  const [dataList,setDataList] = useState<any[]>([])
  const windowSize = useWindowSize()
  const [showCount,setShowCount] = useState(0)
  const [showList,setShowList] = useState<any[]>([])
  const [pageSize,setPageSize] = useState(150)
  const [page,setPage] = useState(0)
  const [totalPage,setTotalPage] = useState(0)
  

  const block_box = useCallback((node:any) => {
		if (node !== null) {
      const width = node.getBoundingClientRect().width
      const max_count = Math.round(width / (cellSize+cellGap))
      const base_gap = (max_count-1) * cellGap
      const w = width - base_gap
      const count = Math.floor(w / cellSize)
			if(count != showCount){
        console.log('width:'+width+'   count:'+ count)
        setShowCount(count)
      }
		}else{
      console.log('node is null')
    }
	}, [loading,dataList,windowSize.width]);//eslint-disable-line
  //
  function next() {
    initTableList(page+1)
  }
  function previous() {
    initTableList(page-1)
  }
  function gotoPage(page:number) {
    initTableList(page)
  }
  //
  async function initTableList(limit?:number) {
    setLoading(true)
    setDataList([])
    const list = []
    const data = {
      pageSize:pageSize,
      offset:limit
    }
    const resp:any = await GameApi.getBlockCellList(data)
    if(!resp.error && resp.result){
      setPage(resp.result.limit)
      setTotalPage(Math.ceil(resp.result.totalCount/pageSize))
      const dList = resp.result.list
      for (let index = 0; index < dList.length; index++) {
        list.push(dList[index])
      }
    }
    setDataList(list)
    setLoading(false)
  }
  function onItemClick(item:any){
    console.log(item)
  }
  // 
  useEffect(() => {
    if(!loading && dataList && dataList.length >0){
      const row_count =  Math.floor((dataList.length<pageSize?pageSize:dataList.length) / showCount)
      const list = []
      for (let index = 0; index < showCount*row_count; index++) {
        if(dataList[index]){
          list.push(dataList[index])
        }
      }
      setPageSize(showCount*row_count)
      setShowList(list)
    }
  },[showCount,loading])//eslint-disable-line
  //
  useEffect(() => {
    const page = searchParams.get('page')
    if(page){
      setPage(Number(page))
    }
  },[searchParams])//eslint-disable-line
  //
  useEffect(() => {
    initTableList();
  },[])//eslint-disable-line
  //
  return (
    <div style={{borderRadius:'8px',color:'var(--arkreen-text-primary)'}}>
      <div style={{background:'#FFFFFF',borderRadius:'8px',padding:'16px',color:'var(--arkreen-text-primary)'}}>
        <div style={{fontSize:'20px',fontWeight:700}}>Bitcoin Blocks</div>
        <div style={{paddingBlock:'20px'}}>
          {
            !loading?((showList && showList.length>0)?<></>:<Empty />):<Loading />
          }
          {
            dataList && dataList.length>0?(
              <div ref={block_box} style={{display:'flex',gap:cellGap+'px',flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap',position:'relative',overflow:'hidden'}}>
                {
                  showList.map((item:any) => 
                    <div key={'cell_item_'+Math.random()} onClick={() => onItemClick(item)} style={{width:cellSize+'px',height:cellSize+'px',background:'#D8E4DD',lineHeight:cellSize+'px',textAlign:'center',overflow:'hidden',cursor:'pointer'}}>
                      <div style={{position:'absolute',overflow:'hidden',width:cellSize+'px',height:cellSize+'px'}}>
                        <div style={{width:cellSize+'px',height:cellSize+'px',background:'#D8E4DD',lineHeight:cellSize+'px',textAlign:'center',position:'absolute',zIndex:1}}>
                          
                        </div>
                        <div style={{width:cellSize+'px',height:cellSize+'px',lineHeight:cellSize+'px',textAlign:'center',position:'absolute',transform: 'translate(0px, '+((item && item.status==1)?(((item.cell_count-item.green_count)/item.cell_count)*100):'100')+'%)',background:'#66BD89',zIndex:2}}>
                          
                        </div>
                        <div style={{width:cellSize+'px',height:cellSize+'px',lineHeight:cellSize+'px',textAlign:'center',position:'absolute',transform: 'translate(0px, 0%)',zIndex:3}}>
                          {
                            (item.id<100)?<span style={{fontSize:'32px',fontWeight:600}}>{item.id}</span>:<></>
                          }
                          {
                            (item.id>=100 && item.id<1000)?<span style={{fontSize:'28px',fontWeight:600}}>{item.id}</span>:<></>
                          }
                          {
                            (item.id>=1000 && item.id<10000)?<span style={{fontSize:'20px',fontWeight:600}}>{item.id}</span>:<></>
                          }
                          {
                            (item.id>=10000 && item.id<100000)?<span style={{fontSize:'24px',fontWeight:600}}>{item.id}</span>:<></>
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            ):<></>
          }
        </div>
        <div style={{display:loading?'none':'inline'}}>
          <div  className={ArkreenPaginationStyle['pagination-box-pc']}>
            {/* 下一页 */}
            <div className={(page>=totalPage)?ArkreenPaginationStyle['pagination-btn']+' '+ArkreenPaginationStyle['disable']:ArkreenPaginationStyle['pagination-btn']} onClick={() => next()}><RightIcon/></div>
            {/* 尾页 */}
            <div style={{display:(page>=totalPage)?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']} onClick={() => gotoPage(totalPage)}>{totalPage}</div>
            {/* 向后5页 */}
            <div style={{display:page+5>=pageSize?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page+5)}>...</div>
            {/* 向后4页 */}
            <div style={{display:page+4>=pageSize?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page+4)}>{page+4}</div>
            {/* 向后3页 */}
            <div style={{display:page+3>=pageSize?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page+3)}>{page+3}</div>
            {/* 向后2页 */}
            <div style={{display:page+2>=pageSize?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page+2)}>{page+2}</div>
            {/* 向后1页 */}
            <div style={{display:page+1>=pageSize?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page+1)}>{page+1}</div>
            {/* 当前页 */}
            <div className={ArkreenPaginationStyle['pagination-btn']+" "+ArkreenPaginationStyle['selected']}>{page}</div>
            {/* 向前1页 */}
            <div style={{display:page-1<=1?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page-1)}>{page-1}</div>
            {/* 向前2页 */}
            <div style={{display:page-2<=1?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page-2)}>{page-2}</div>
            {/* 向前3页 */}
            <div style={{display:page-3<=1?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page-3)}>{page-3}</div>
            {/* 向前4页 */}
            <div style={{display:page-4<=1?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page-4)}>{page-4}</div>
            {/* 向前5页 */}
            <div style={{display:page-5<=1?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(page-5)}>...</div>
            {/* 第一页 */}
            <div style={{display:page<=1?'none':'block'}} className={ArkreenPaginationStyle['pagination-btn']}  onClick={() => gotoPage(1)}>1</div>
            {/* 上一页 */}
            <div className={page<=1?ArkreenPaginationStyle['pagination-btn']+" "+ArkreenPaginationStyle['disable']:ArkreenPaginationStyle['pagination-btn']}  onClick={() => previous()}><LeftIcon/></div>
          </div>
          <div className={ArkreenPaginationStyle['pagination-box-m']}>
          <div className={page<=1?ArkreenPaginationStyle['pagination-btn']+' '+ArkreenPaginationStyle['disable']:ArkreenPaginationStyle['pagination-btn']}  onClick={() => previous()}><LeftIcon/></div>
            <div className={ArkreenPaginationStyle['pagination-btn']+' '+ArkreenPaginationStyle['selected']}>{page}</div>
            <div className={(pageSize>dataList?.length)?ArkreenPaginationStyle['pagination-btn']+' '+ArkreenPaginationStyle['disable']:ArkreenPaginationStyle['pagination-btn']} onClick={() => next()}><RightIcon/></div>
          </div>
        </div>
      </div>
    </div>
  )
}
