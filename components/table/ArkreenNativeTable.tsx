"use client"
import React from 'react'
import ArkreenPagination from '../ArkreenPagination'
import Loading from '@/components/loading';

type TableProps = {
    loading?: boolean
    dataList: any[]
    titleList: any[]
    pageSize:number
    currentPage:number
    onPageChange?: () => void
    
}

export default function ArkreenNativeTable(prop: TableProps): JSX.Element {
    //
    function makeItems(n:number) {
        const items = new Array<Object>(n);
        for (let i = 0; i < n; ++i) {
          items[i] = {}
        }
        return items;
    }
    const emptyItems = makeItems(prop.pageSize)
    //
    return (
        <div>
            <table style={{width:'100%',borderCollapse: 'collapse',borderSpacing: 0}}>
                <thead style={{width:'100%',background:'#DEF5EF',height:'48px'}}>
                    <tr>
                        {
                            prop.titleList.map((item:any) => <th key={'th_key_'+Math.random()} style={item.style}>{item.name}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {!prop.loading?
                    prop.dataList?.map((item:any) =>
                        <tr key={'table_tr_'+Math.random()} style={{height:'72px'}}>
                            {
                                prop.titleList.map((element:any) => <th key={'th_key_'+Math.random()}>{item[element.key]}</th>)
                            }
                        </tr>
                    )
                    :
                    emptyItems.map(() =>
                        <tr key={'table_tr_'+Math.random()} style={{height:'72px'}}>
                        {
                            prop.titleList.map(() => <th key={'th_key_'+Math.random()} style={{paddingInline:'16px'}}><Loading /></th>)
                        }
                        </tr>
                    )
                    }
                </tbody>
            </table>
            <div>
                <ArkreenPagination responsive={prop.dataList?.length<prop.pageSize} current={prop.currentPage} onChange={prop.onPageChange}/>
            </div>
        </div>
    )
}
   