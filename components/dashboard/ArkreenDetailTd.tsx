import React, { CSSProperties } from "react";
import { Skeleton  } from 'antd';
import DetailPageStyle from '@/styles/DetailPage.module.css'

type cardProps = {
    icon?:React.ReactNode,
    title: string,
    content: any,
    href?: string,
    style?:CSSProperties,
    titleColor?:string,
    valueColor?:string,
    isDashboard?:boolean
}

export default function ArkreenDetailTd(props: cardProps): JSX.Element {
    return (
        <div className={DetailPageStyle[props.isDashboard?'detail-header-info-dashboard':'detail-header-info']}>
            <div className={DetailPageStyle['detail-header-info-title']} >{props.icon} <span style={{marginLeft:'3px'}}>{props.title}</span></div>
            <div className={DetailPageStyle['detail-header-info-value']} >{(props.content===undefined || props.content==='')?<Skeleton.Input style={{width:'200px'}} active block={true} size='small' />:props.content}</div>
        </div>
    )
}
    