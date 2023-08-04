"use client"

import React,{ useState,useEffect  } from "react";
import {DownOutlined,UpOutlined,} from '@ant-design/icons';
import ArkreenMenuStyle from '@/styles/ArkreenMenu.module.css'
import { useRouter } from 'next/router';

type Item = {
    key: string,
    sort: string,
    icon?: React.ReactNode,
    label: string,
    url: string
    childrenItem?: Item[];
}

type Props = {
    menuList: Item[],
    selectKey?: string,
    style?: React.CSSProperties
    collapsed:boolean,
};

export default function ArkreenMenu(prop: Props): JSX.Element {
    const router = useRouter();
    const [selectKey,setSelectKey] = useState(prop.selectKey)
    const [downStatus,setDownStatus] = useState({key:prop.selectKey,isDown:true})
    const [collapsed,setCollapsed] = useState(prop.collapsed)

    function itemOnClick(key: string,url: string) {
        setSelectKey(key);
        let data = new URLSearchParams(String(router.query));
        if(data.has('page')){
            data.delete('page')
        }
        if(data.has('type')){
            data.delete('type')
        }
        if(data.has('coupon')){
            data.delete('coupon')
        }
        router.push('/'+key+(data?.toString()?"?"+data.toString():'')) // , { state: { fromHome: true } }
    }

    function itemParentOnClick(key: string){
        if(downStatus.key === key){
            setDownStatus({key:key,isDown:!downStatus.isDown})
        }else{
            setDownStatus({key:key,isDown:false})
        }
    }

    useEffect(() => {
        setCollapsed(prop.collapsed)
    },[prop.collapsed])

    useEffect(() => {
        let title = 'Arkreen Console'
        let key = ''
        const pathname = location.pathname
        if(pathname) {
            if(pathname.startsWith("/dashboard") || pathname==='/' || pathname===''){
                key = 'dashboard'
                title = title + ' - Dashboard'
            }else if(pathname === '/shop'){
                key = 'shop'
                title = title + ' - Shop'
            }else if(pathname.startsWith('/miners/')){
                key = 'miners'
                title = title + ' - Miner'
            }else if(pathname === '/withdraw'){
                key = 'withdraw'
                title = title + ' - Withdraw'
            }else if(pathname === '/quick-payment'){
                key = 'shop'
                title = title + ' - Quick Payment'
            }else if(pathname === '/onboard'){
                key = 'onboard'
                title = title + ' - Onboard'
            }else if(pathname === '/rank'){
                key = 'rank'
                title = title + ' - Rank'
            }else if(pathname === '/login-new'){
                key = 'login-new'
                title = title + ' - LoginNew'
            }else if(pathname.startsWith('/profile')){
                key = 'profile'
                title = title + ' - Profile'
            }else if(pathname.startsWith('/map')){
                key = 'map'
                title = title + ' - Map'
            }else if(pathname.startsWith('/settings')){
                key = 'settings'
                title = title + ' - Settings'
            }else if(pathname.startsWith('/game')){
                key = 'game'
                title = title + ' - Game'
            }
            setSelectKey(key)            
        }
        if(key==''){
            router.push('/not-found')
        }
        if(typeof document !== 'undefined'){
            document.title = title
        }
    },[location.pathname])//eslint-disable-line

    return (
        <div style={prop.style}>
            <ul className={ArkreenMenuStyle[collapsed?'menu-main-collapsed':'menu-main']}>
                {
                    prop.menuList.map((item) => {
                        if(item.childrenItem){
                            return  <li key={item.key}
                            onClick = {() => itemParentOnClick(item.key)}
                            className={ArkreenMenuStyle['menu-item-parent']}>
                                <div className={ArkreenMenuStyle['menu-item-parent-box']}>
                                    <span className={ArkreenMenuStyle['menu-item-logo']}>{item.icon}</span>
                                    <span className={ArkreenMenuStyle['menu-item-span']}>
                                        {item.label}
                                        <span className={ArkreenMenuStyle['menu-item-down']}>
                                            {(downStatus.key === item.key)?(downStatus.isDown?<DownOutlined />:<UpOutlined />):<DownOutlined />}
                                        </span>
                                    </span>
                                </div>
                                <ArkreenMenu collapsed={prop.collapsed} style={{display:(downStatus.key === item.key)?(downStatus.isDown?"none":"block"):"none"}} menuList={item.childrenItem}/>
                            </li>
                        }else{
                            return  <li key={item.key}
                            onClick = {() => itemOnClick(item.key,item.url)}
                            className={collapsed?(selectKey === item.key ? ArkreenMenuStyle['menu-item']+" "+ArkreenMenuStyle['menu-item-collapsed']+" "+ArkreenMenuStyle['menu-item-active']: ArkreenMenuStyle['menu-item']+" "+ArkreenMenuStyle['menu-item-collapsed']):(selectKey === item.key ? ArkreenMenuStyle['menu-item']+" "+ArkreenMenuStyle['menu-item-active']:ArkreenMenuStyle['menu-item'])}>
                                <span className={selectKey === item.key ? ArkreenMenuStyle['menu-item-logo']+' '+ArkreenMenuStyle['menu-item-logo-active']:ArkreenMenuStyle['menu-item-logo']}>{item.icon}</span>
                                <span className={collapsed?ArkreenMenuStyle['menu-item-span-collapsed']:''}>{item.label}</span>
                            </li>
                        }
                    })
                }
            </ul>
        </div>

    )
}
    