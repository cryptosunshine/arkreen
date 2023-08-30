"use client"

import { memo } from "react";
import AvatarBuilder from './AvatarBuilder';
import useOwnerInfo from "@/hooks/useOwnerInfo";
import Loading from '@/components/loading';

type ArkreenAvatarProps = {
    address: string
    shape: "circle" | "square" | undefined
    size?: any
    children?: any
    type?: 'owner' | 'miner' | undefined
}

function ArkreenAvatar(props: ArkreenAvatarProps): JSX.Element {
    const [loading, ownerInfo] = useOwnerInfo(props.address)

    return <>
        {
            loading
                ?
                <Loading />
                :
                <div 
                className="avatar"
                style={{display: 'flex',  justifyContent: 'center', alignItems: 'center'}}
                dangerouslySetInnerHTML={{ __html: AvatarBuilder({ address: !loading && ownerInfo.avatar ? ownerInfo.avatar : props.address, type: props.type }) }} ></div>
        }
    </>
}

export default memo(ArkreenAvatar)
