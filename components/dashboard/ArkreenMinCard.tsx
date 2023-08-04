"use client"

import React, { CSSProperties } from "react";
import { Skeleton } from 'antd';
import ArkreenMinCardStyle from '@/styles/ArkreenMinCard.module.css'

type cardProps = {
    icon:React.ReactNode,
    title: string,
    content: any,
    href?: string,
    style?:CSSProperties,
    titleColor?:string,
    valueColor?:string,
}

export default function ArkreenMinCard(prop: cardProps): JSX.Element {
    return (
        <div className={ArkreenMinCardStyle['min-card-body']} style={prop.style}>
            <div className={ArkreenMinCardStyle['right']} >
                <div className={ArkreenMinCardStyle['title']} style={{color:prop.titleColor?prop.titleColor:'#40404D'}}>
                    {prop.title}
                </div>
                <div className={ArkreenMinCardStyle['content']} style={{color:prop.valueColor?prop.valueColor:'#101020'}}>
                    {prop.content?prop.content:<Skeleton.Input  active block={true} size='small' />}
                </div>
            </div>
            <div className={ArkreenMinCardStyle['icon']} style={{color:prop.valueColor?prop.valueColor:'#101020'}}>
                {prop.icon}
            </div>
        </div>
    )
}
    