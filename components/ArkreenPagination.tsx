"use client"

import ArkreenPaginationStyle from '../styles/ArkreenPagination.module.css'
import {LeftIcon,RightIcon} from './icons/ArkreenIcon'
import { useState  } from "react";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function ArkreenPagination(prop: any): JSX.Element {

    
    const router = useRouter()
    const searchParams = useSearchParams()
    const [page,setPage] = useState(prop.current?prop.current:1)

    function previous(){
        if(page>1){
            setPage(page-1)
            handleChange(page-1)
        }
    }

    function next(){
        if(!prop.responsive){
            setPage(page+1)
            handleChange(page+1)
        }
    }
    //
    return (
         <div>
            <div  className={ArkreenPaginationStyle['pagination-box-pc']}>
             <div className={prop.responsive?ArkreenPaginationStyle['pagination-btn']+' '+ArkreenPaginationStyle['disable']:ArkreenPaginationStyle['pagination-btn']} onClick={() => next()}><RightIcon/></div>
             <div className={ArkreenPaginationStyle['pagination-btn']+" "+ArkreenPaginationStyle['selected']}>{page}</div>
             <div className={page<=1?ArkreenPaginationStyle['pagination-btn']+" "+ArkreenPaginationStyle['disable']:ArkreenPaginationStyle['pagination-btn']}  onClick={() => previous()}><LeftIcon/></div>
            </div>
            <div className={ArkreenPaginationStyle['pagination-box-m']}>
            <div className={page<=1?ArkreenPaginationStyle['pagination-btn']+' '+ArkreenPaginationStyle['disable']:ArkreenPaginationStyle['pagination-btn']}  onClick={() => previous()}><LeftIcon/></div>
             <div className={ArkreenPaginationStyle['pagination-btn']+' '+ArkreenPaginationStyle['selected']}>{page}</div>
             <div className={prop.responsive?ArkreenPaginationStyle['pagination-btn']+' '+ArkreenPaginationStyle['disable']:ArkreenPaginationStyle['pagination-btn']} onClick={() => next()}><RightIcon/></div>
            </div>
         </div>
    )

    function handleChange(page:number){
        let data = new URLSearchParams(searchParams.toString());
        data.set('page',""+page);
        prop.onChange?.call(null, page, 1)
        router.push(router.pathname+'?'+data.toString())
        //navigate(`?`+data.toString(), { state: { fromHome: true } })
    }
}