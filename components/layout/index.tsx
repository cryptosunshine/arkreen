import React, { useState, useEffect } from 'react';
import AppSiderBar from "./AppSiderBar";
import AppTopBar from "./AppTopBar";
import AppFooterBar from "./AppFooterBar";
import { useAccount } from "wagmi"
import AppNoLoginTopBar from './AppNoLoginTopBar';

type MainLayoutProps = {
  children: any
}

export default function MainLayout(prop: MainLayoutProps) {
  const [catchConnected, setCatchConnected] = useState(false)
  const { isConnected } = useAccount()

  useEffect(() => {
    setCatchConnected(isConnected)
  }, [isConnected])

  return (
    <div style={{ height: "100vh", display: 'flex', overflow: 'hidden' }}>
      {catchConnected ? <AppSiderBar /> : <></>}
      <div style={{ overflow: 'auto', overflowX: 'hidden', flex: 1 }}>
        {catchConnected ? <AppTopBar /> : <AppNoLoginTopBar />}
        <div style={{ background: '#F5F5F5', paddingInline: "20px", boxSizing: 'border-box', minHeight: 'calc(100% - 120px)', paddingBlock: '20px' }}>
          {prop.children}
        </div>
        <AppFooterBar />
      </div>
    </div>
  );
}