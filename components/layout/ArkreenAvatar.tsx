"use client"

import { Avatar } from 'antd';
import { memo } from "react";
import AvatarBuilder from '@/components/avatar/AvatarBuilder';

type ArkreenAvatarProps = {
    address: string
    shape: "circle" | "square" | undefined
    size?: any
    children?:any
    type?:'owner'|'miner'|undefined
}

function ArkreenAvatar(props: ArkreenAvatarProps): JSX.Element {
    const icon = <span dangerouslySetInnerHTML={{ __html: AvatarBuilder({address:props.address,type:props.type})}} ></span>
    return <Avatar style={{background:'rgba(0,0,0,0)'}} shape={props.shape} icon={icon} size={props.size} >{props.children}</Avatar>
}

export default memo(ArkreenAvatar)
    