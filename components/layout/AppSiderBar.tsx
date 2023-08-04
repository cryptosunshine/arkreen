"use client"

import React,{useState,useEffect} from "react";
import { Layout, Row, Col } from "antd";
import {
  ArkreenLogoSingleIcon,
  ArkreenLogoTextUnionIcon,
  ArkreenHomeIcon,
  ArkreenExplorerIcon,
  ArkreenDocsIcon,
  ArkreenMenuSwitchLeftIcon,
  ArkreenMenuSwitchRightIcon,
} from "../icons/ArkreenIcon";
import ArkreenMenuStyle from "@/styles/ArkreenMenu.module.css";
import ArkreenMenu from "./ArkreenMenu";
import { useRouter } from 'next/router';
import {jumpTo,getMenuList,useWindowSize} from "@/utils/BrowserUtils";
import { useAccount } from 'wagmi'


const { Sider } = Layout;

function AppSiderBar() {
  const router = useRouter();
  const [collapsed,setCollapsed] = useState(false)
  const [userControl,setUserControl] = useState(false)
  const [getSelectKey] = useState(router.pathname.substring(1))
  const { address } = useAccount()
  function gotoHome() {
    router.push("/");
  }

  function siderChange(){
    setUserControl(true);
    setCollapsed(!collapsed)
  }

  const windowSize = useWindowSize();

  useEffect(() => {
    if(!userControl){
      (windowSize.width)>992?setCollapsed(false):setCollapsed(true)
    }
  },[windowSize.width])//eslint-disable-line

  return (
    <Row style={{background:'#FFFFFF'}}>
      <Col xs={0} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Sider  breakpoint="lg" width="240px" className={ArkreenMenuStyle['menu-box']} collapsed={collapsed}>
          <div onClick = {() => gotoHome()} >
            <div className={ArkreenMenuStyle[collapsed?'hide':'logo-long']}>
              <ArkreenLogoSingleIcon /><ArkreenLogoTextUnionIcon style={{marginLeft:'10px'}}/>
            </div>
            <div className={ArkreenMenuStyle[collapsed?'logo-short':'hide']}><ArkreenLogoSingleIcon /></div>
          </div>
          <ArkreenMenu collapsed={collapsed} menuList={getMenuList(String(address))} selectKey={getSelectKey}/>
          <div className={ArkreenMenuStyle[collapsed?'footer-link-main-collapsed':'footer-link-main']}>
            <ul className={ArkreenMenuStyle[collapsed?'ul-main-collapsed':'ul-main']}>
              <li className={ArkreenMenuStyle[collapsed?'footer-link-item-center':'footer-link-item-left']} onClick={() => jumpTo('https://arkreen.com/')}>
                <span className={ArkreenMenuStyle[collapsed?'footer-link-logo-collapsed':'footer-link-logo']}><ArkreenHomeIcon/></span>
                <span className={ArkreenMenuStyle[collapsed?'hide':'footer-link-span']}>Home</span>
              </li>
              <li className={ArkreenMenuStyle[collapsed?'footer-link-item-center':'footer-link-item-left']} onClick={() => jumpTo(""+process.env.NEXT_PUBLIC_EXPLORER_URL)}>
                <span className={ArkreenMenuStyle[collapsed?'footer-link-logo-collapsed':'footer-link-logo']}><ArkreenExplorerIcon/></span>
                <span className={ArkreenMenuStyle[collapsed?'hide':'footer-link-span']}>Explorer</span>
              </li>
              <li className={ArkreenMenuStyle[collapsed?'footer-link-item-center':'footer-link-item-left']} onClick={() => jumpTo('https://docs.arkreen.com/')}>
                <span className={ArkreenMenuStyle[collapsed?'footer-link-logo-collapsed':'footer-link-logo']}><ArkreenDocsIcon/></span>
                <span className={ArkreenMenuStyle[collapsed?'hide':'footer-link-span']}>Docs</span>
              </li>
            </ul>
            <div className={ArkreenMenuStyle[collapsed?'hide':'menu-switch-btn-left']}>
              <div onClick={() => siderChange()}><ArkreenMenuSwitchLeftIcon/></div>
            </div>
            <div className={ArkreenMenuStyle[collapsed?'menu-switch-btn-right':'hide']}>
              <div onClick={() => siderChange()}><ArkreenMenuSwitchRightIcon/></div>
            </div>
          </div>
        </Sider>
      </Col>
    </Row>
  );
}

export default AppSiderBar;
