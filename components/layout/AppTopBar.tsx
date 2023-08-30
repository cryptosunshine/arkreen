"use client"

import React,{useEffect, useState} from 'react';
import { ArkreenLogoSingleIcon,ArkreenLogoTextUnionIcon} from '../icons/ArkreenIcon'
import PageTopStyle from '@/styles/PageTop.module.css'
import ArkreenConnectButton from '../button/ArkreenConnectButton'
import { useRouter } from 'next/router';


function AppNoLoginTopBar(){
  const router = useRouter()
  const menuList = [
      {label:'BTC Consumption',key:'btc-consumption'},
      {label:'BTC Blocks',key:'btc-map'},
      //{label:'Arkreen Cells',key:'arkreen-cells'},
      {label:'Greening',key:'greening'}
    ]
  const [activeMenu,setActiveMenu] = useState(router.pathname.replaceAll('/',''))

  function itemOnClick(key: string) {
    router.push(key)
  }

  useEffect(() => {
    setActiveMenu(router.pathname.replaceAll('/',''))
  },[router.pathname])//eslint-disable-line

  return (
    <div className={PageTopStyle['header-style']}>
      <div className={PageTopStyle['top-menu-box-pc']} style={{display:'flex'}}>
        <div style={{marginTop:'-6px',paddingLeft:'24px',cursor:'pointer'}} onClick={() => itemOnClick('/')}>
          <ArkreenLogoSingleIcon /><ArkreenLogoTextUnionIcon style={{marginLeft:'10px'}}/>
        </div>
        <div style={{flex:1,display:'flex',gap:'12px',paddingInline:'32px'}}>
          <div style={{flex:1}}></div>
          {
            menuList.map((item:{label:string,key:string}) => 
              <div key={'menu_'+item.key} 
                   onClick={() => itemOnClick(item.key)}
                   style={{color:activeMenu==item.key?'var(--arkreen-green)':'var(--arkreen-text-ordinary)',fontSize:'18px',fontWeight:600,lineHeight:'40px',cursor:'pointer',paddingInline:'12px'}}>
                    {item.label}
              </div>)
          }
          <div style={{flex:1}}></div>
        </div>
        <div>
          <div><ArkreenConnectButton showBalance={true}/></div>
        </div>
      </div>
    </div>
  );
}

export default AppNoLoginTopBar;
