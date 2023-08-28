"use client"
import React from 'react'
import ArkreenMainStyle from '../../styles/ArkreenMain.module.css'

type InputProps = {
    type?:'number'|'link'|'primary'|'text'|'dashed'|undefined
    disabled?:boolean
    readOnly?:boolean
    style?:React.CSSProperties
    className?:string
    onChange?: (target:any) => void
    children?:any
    value?:any
    defaultValue?:any
    
}

export default function ArkreenInput(prop: InputProps): JSX.Element {
    return <input type={prop.type} readOnly={prop.readOnly} onChange={prop.onChange} disabled={prop.disabled} style={prop.style} defaultValue={prop.defaultValue} className={ArkreenMainStyle['arkreen-input']} />
}
   