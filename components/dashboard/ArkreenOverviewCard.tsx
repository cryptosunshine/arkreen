"use client"

import React, { CSSProperties } from "react";
import ArkreenMinCardStyle from '@/styles/ArkreenMinCard.module.css'
import ArkreenDetailTd from './ArkreenDetailTd'

type cardProps = {
    title: string,
    content: any,
    href?: string,
    style?:CSSProperties,
}

export default function ArkreenOverviewCard(prop: cardProps): JSX.Element {
    return (
        <div style={{paddingTop:'20px'}}>
            <div className={ArkreenMinCardStyle['overview-card-body']}>
                <div className={ArkreenMinCardStyle['overview-title']}>
                    {prop.title}
                </div>
                <div style={{color:'#40404D',paddingTop:'16px'}}>
                    {
                        prop.content.map((element:any) => 
                            <div key={'Arkreen_Overview_Card_'+Math.random()}>
                                <div key={'ArkreenDetailTd_'+Math.random()} style={{paddingBlock:'4px'}}><ArkreenDetailTd isDashboard={true} key={'ArkreenDetailTd_'+Math.random()} icon={element.icon} title={element.title} content={element.value} /></div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
    