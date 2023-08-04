"use client"

import React,{useState} from 'react';
import { Layout, Space ,Divider } from 'antd';
import { ArkreenLogoSingleIcon,ArkreenLogoTextUnionIcon,CloseMenuIcon,ArkreenHomeIcon,ArkreenExplorerIcon,ArkreenDocsIcon,MenuIcon} from '../icons/ArkreenIcon'
import PageTopStyle from '@/styles/PageTop.module.css'
import {jumpTo} from "@/utils/BrowserUtils";
import ArkreenConnectButton from './ArkreenConnectButton'

const { Header } = Layout;

function AppNoLoginTopBar(){
  //const navigate  = useNavigate()
  const [isMenu,setIsMenu] = useState(false)

  function itemOnClick(key: string,url: string) {
    //navigate(url)
    showMenu();
  }

  function gotoIndex() {
    //navigate('/')
  }

  function showMenu(){
    setIsMenu(!isMenu)
  }

  return (
    <Header className={PageTopStyle['header-style']}>
      <div className={PageTopStyle['top-menu-box-m']}>
            <Space>
              <div onClick = {() => gotoIndex() } style={{paddingLeft:'3px',paddingTop:'6px'}}>
                <ArkreenLogoSingleIcon /><ArkreenLogoTextUnionIcon style={{marginLeft:'10px'}}/>
              </div>
            </Space>
            <Space>
              <div style={{display:'flex'}}>
                <div style={{gap:'0px',flex:'1',marginTop:'6px'}}>
                  <ArkreenConnectButton showBalance={false} onlyAvatar={true} />
                </div>
              </div>
            </Space>
      </div>
      <div className={PageTopStyle['top-menu-box-pc']}>
        <div style={{flex:1,marginTop:'-6px',paddingLeft:'24px'}}>
          <ArkreenLogoSingleIcon /><ArkreenLogoTextUnionIcon style={{marginLeft:'10px'}}/>
        </div>
        <div>
          <div><ArkreenConnectButton showBalance={true}/></div>
        </div>
      </div>
      <div className={PageTopStyle['top-menu-show']} >
        <div style={{display:isMenu?'':'none',background:'#FFFFFF',zIndex:'999',position: 'absolute',width: '100%',height: '-webkit-fill-available',color:'#000000'}}>
          <div className={PageTopStyle['mobile-menu-box']}> 
            
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

export default AppNoLoginTopBar;
