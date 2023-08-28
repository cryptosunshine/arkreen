"use client"

import { Avatar,Skeleton } from 'antd';
import { memo } from "react";
import AvatarBuilder from './AvatarBuilder';
import useOwnerInfo from "@/hooks/useOwnerInfo";

type ArkreenAvatarProps = {
    address: string
    shape: "circle" | "square" | undefined
    size?: any
    children?:any
    type?:'owner'|'miner'|undefined
}

function ArkreenAvatar(props: ArkreenAvatarProps): JSX.Element {
    const [loading,ownerInfo] = useOwnerInfo(props.address)

    return <Avatar
        style={{background:'rgba(0,0,0,0)'}}
        shape={props.shape}
        icon={loading?<Skeleton.Avatar />:<span dangerouslySetInnerHTML={{ __html: AvatarBuilder({address:!loading && ownerInfo.avatar?ownerInfo.avatar:props.address,type:props.type})}} ></span>}
        size={props.size} >{props.children}</Avatar>
}

export default memo(ArkreenAvatar)
    