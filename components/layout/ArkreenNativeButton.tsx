"use client"

import type {ButtonProps } from 'antd/es/button';
import ArkreenMainStyle from '@/styles/ArkreenMain.module.css'


export default function ArkreenNativeButton(prop: ButtonProps): JSX.Element {
    // if(prop.type == 'ghost'){
    //     return <button disabled={prop.disabled} style={prop.style} className={ArkreenMainStyle['arkreen-button-ghost'] + (prop.className?' '+prop.className:'')} onClick={prop.onClick}><span>{prop.children}</span></button>
    // }else 
    if(prop.type == 'link'){
        return <button disabled={prop.disabled} style={prop.style} className={ArkreenMainStyle['shop-buy-btn'] + (prop.className?' '+prop.className:'')} onClick={prop.onClick}><span>{prop.children}</span></button>
    }else if(prop.type == 'primary'){
        return <button disabled={prop.disabled} style={prop.style} className={ArkreenMainStyle['arkreen-button-primary'] + (prop.className?' '+prop.className:'')} onClick={prop.onClick}><span>{prop.children}</span></button>
    }else if(prop.type == 'text'){
        return <button disabled={prop.disabled} style={prop.style} className={ArkreenMainStyle['arkreen-button-text'] + (prop.className?' '+prop.className:'')} onClick={prop.onClick}><span>{prop.children}</span></button>
    }else if(prop.type == 'dashed'){
        return <button disabled={prop.disabled} style={prop.style} className={ArkreenMainStyle['arkreen-button-dashed'] + (prop.className?' '+prop.className:'')} onClick={prop.onClick}><span>{prop.children}</span></button>
    }else {
        return <button disabled={prop.disabled} style={prop.style} className={ArkreenMainStyle['arkreen-button-default'] + (prop.className?' '+prop.className:'')} onClick={prop.onClick}><span>{prop.children}</span></button>
    }
}
   