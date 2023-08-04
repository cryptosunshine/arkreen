"use client"

import { Button } from 'antd';
import type {ButtonProps } from 'antd/es/button';


export default function ArkreenButton(prop: ButtonProps): JSX.Element {
    return (<Button className={prop.className} size={prop.size} shape={prop.shape} type={prop.type} style={prop.style} onClick={prop.onClick} >{prop.children}</Button>)
}
    