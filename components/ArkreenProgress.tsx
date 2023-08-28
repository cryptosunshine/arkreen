"use client"

import React from 'react';

type Props = {
    height?:string
    width?:string
    percent:number
    progressColor?:string
    backgroundColor?:string
    radius?:number
}

export default function ArkreenProgress(props: Props): JSX.Element {
    //
    return (
        <div  style={{width:props.width?props.width:'100%',paddingBlock:'6px'}}>
            <div style={{background:props.backgroundColor?props.backgroundColor:'#F4F7F6',width:'100%',borderRadius:props.radius?props.radius+'px':'100px'}}>
                <div style={{background:props.progressColor?props.progressColor:'var(--arkreen-green)',width: props.percent+'%',borderRadius:props.radius?props.radius+'px':'100px',height:props.height?props.height:'4px'}}>
                
                </div>
            </div>
        </div>
    )
}
