"use client"

import React,{useState,memo } from 'react';
import type { ColumnsType } from 'antd/es/table';
// import MinerStackAreaChart from '@/components/dashboard/MinerStackAreaChart'
// import ArkreenDashboardTable from '@/components/dashboard/ArkreenDashboardTable'


type Item = {
    address:string,
    minerType:number,
    status:any,
    onboardTime:number,
    icon:string
}

type cardProps = {
    title?: string,
    dataList: Item[],
    currentPage:number,
    onPageChange?: (page: number, pageSize: number) => void;
}

function ArkreenMinViewTable(prop: cardProps): JSX.Element {
    
   

    const columns: ColumnsType<Item> = [
        {
          title: 'Icon',
          dataIndex: 'icon',
          key: 'icon',
          render: (text:any) => <span style={{fontSize:'26px'}}>{text}</span>,
          width:45,
          fixed: 'left',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          width:160,
          fixed: 'left',
        },
        {
          title: 'Miner Type',
          dataIndex: 'minerType',
          key: 'minerType',
          width:160,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width:160,
            
        },
        {
            title: 'OnboardTime',
            dataIndex: 'onboardTime',
            key: 'onboardTime',
            width:200,
        },
        // {
        //     title: 'Reward & Energy',
        //     dataIndex: 'minerAcerInfo',
        //     key: 'minerAcerInfo',
        //     render: (info:any) =>  <MinerStackAreaChart key={info.address} address={info.address} onboardTime={info.onboardTime} />,
        // }
    ]

    return (
        <div style={{borderRadius:'10px',padding:'16px',background:'#FFFFFF'}}>
            <div style={{color:'#40404D',fontSize:'20px',paddingBottom:'16px'}}>
                {prop.title}
            </div>
            {/* <ArkreenDashboardTable pageSize={10} key={Math.random()} scroll={1025} currentPage={prop.currentPage} columns={columns} datalist={prop.dataList} loading={prop.dataList?false:true} onPageChange={prop.onPageChange}/> */}
        </div>
    )
}

export default memo(ArkreenMinViewTable);