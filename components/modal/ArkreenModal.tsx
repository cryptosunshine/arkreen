"use client"

import {useEffect, useState} from 'react'
import ArkreenMainStyle from '../../styles/ArkreenMain.module.css'
import {CloseOutlined} from '@ant-design/icons'


type ArkreenModalType = {
    isModalOpen:boolean
    children?: React.ReactNode
    title:string
    onClose?: (data: any) => void;
    titleBackground?:string
    maxWidth?:string
    hideClose?:boolean
}

export default function ArkreenModal(prop: ArkreenModalType): JSX.Element {

    const [display,setDisplay] = useState(prop.isModalOpen)

    function closeModal(){
        prop.onClose?.call(1,false)
    }

    useEffect(() => {
        setDisplay(prop.isModalOpen)
    },[prop.isModalOpen])

    return (
        <>
        <div className={ArkreenMainStyle['arkreen-modal']} style={{display:display?'flex':'none'}}>
            <div className={ArkreenMainStyle['arkreen-modal-body']} style={prop.maxWidth?{maxWidth:prop.maxWidth}:{}} >
                <div className={ArkreenMainStyle['arkreen-modal-context']}>
                    <div className={ArkreenMainStyle['arkreen-modal-title']} style={{background:prop.titleBackground?prop.titleBackground:'#F6F6F9'}}>
                        <div style={{fontWeight:'bold',flex:'1'}}>{prop.title}</div>
                        {prop.hideClose?<></>:<div className={ArkreenMainStyle['arkreen-modal-close']} onClick={() => closeModal()}><CloseOutlined /></div>}
                    </div>
                    {prop.children}
                </div>
            </div>
        </div>
        </>
    )
}
    