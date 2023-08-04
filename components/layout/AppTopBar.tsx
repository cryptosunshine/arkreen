"use client"

import React,{useState} from 'react';
import { Layout, Space ,Divider } from 'antd';
import { ArkreenLogoSingleIcon,ArkreenLogoTextUnionIcon,CloseMenuIcon,ArkreenHomeIcon,ArkreenExplorerIcon,ArkreenDocsIcon,MenuIcon} from '../icons/ArkreenIcon'
import PageTopStyle from '@/styles/PageTop.module.css'
import ArkreenButton from './ArkreenButton'
import {jumpTo,getMenuList,} from "@/utils/BrowserUtils";
import { useRouter } from 'next/router';
import ArkreenConnectButton from './ArkreenConnectButton'
import { useAccount } from 'wagmi'

const { Header } = Layout;

function AppTopBar(){
  const router  = useRouter()
  const {address } = useAccount()
  const [isMenu,setIsMenu] = useState(false)

  function itemOnClick(key: string,url: string) {
    router.push(url)
    showMenu();
  }

  function showMenu(){
    setIsMenu(!isMenu)
  }

  return (
    <Header className={PageTopStyle['header-style']}>
      <div className={PageTopStyle['top-menu-box-m']}>
            <Space>
              <div onClick = {() => router.push('/') } style={{paddingLeft:'3px',paddingTop:'6px'}}>
                <ArkreenLogoSingleIcon /><ArkreenLogoTextUnionIcon style={{marginLeft:'10px'}}/>
              </div>
            </Space>
            <Space>
              <div style={{display:'flex'}}>
                <div style={{gap:'0px',flex:'1',marginTop:'18px'}}>
                  <ArkreenConnectButton showBalance={false} onlyAvatar={true} />
                </div>
                <div style={{gap:'0px',marginTop:'12px'}}>
                  <ArkreenButton type='link' className={PageTopStyle['top-menu-open']} onClick={showMenu}><span >{isMenu?<CloseMenuIcon/>:<MenuIcon/>}</span></ArkreenButton>
                </div>
              </div>
            </Space>
      </div>
      <div className={PageTopStyle['top-menu-box-pc']}>
        <div style={{float:'right'}}>
          <ArkreenConnectButton showBalance={true}/>
        </div>
      </div>
      <div className={PageTopStyle['top-menu-show']} >
        <div style={{display:isMenu?'':'none',background:'#FFFFFF',zIndex:'999',position: 'absolute',width: '100%',height: '-webkit-fill-available',color:'#000000'}}>
          <div className={PageTopStyle['mobile-menu-box']}> 
            {
              getMenuList(String(address)).map((item:any) => {
                return <div key={item.key} onClick = {() => itemOnClick(item.key,item.url)}><div className={PageTopStyle['mobile-menu-icon']} >{item.icon}</div><div className={PageTopStyle['mobile-menu-name']}>{item.label}</div></div>
              })
            }
            <Divider />
            <div onClick = {() => jumpTo('https://arkreen.com/')}><div className={PageTopStyle['mobile-menu-icon']}><ArkreenHomeIcon/></div><div className={PageTopStyle['mobile-menu-name']}>Home</div></div>
            <div onClick = {() => jumpTo(""+process.env.NEXT_PUBLIC_EXPLORER_URL)}><div className={PageTopStyle['mobile-menu-icon']}><ArkreenExplorerIcon/></div><div className={PageTopStyle['mobile-menu-name']}>Explorer</div></div>
            <div onClick = {() => jumpTo('https://docs.arkreen.com/')}><div className={PageTopStyle['mobile-menu-icon']}><ArkreenDocsIcon/></div><div className={PageTopStyle['mobile-menu-name']}>Docs</div></div>
          </div>
        </div>
      </div>

    </Header>
  );
}

export default AppTopBar;
