import React, { useState, useEffect } from 'react';
import AppFooterBar from "./AppFooterBar";
import AppTopBar from './AppTopBar';

type MainLayoutProps = {
  children: any
}

export default function MainLayout(prop: MainLayoutProps) {

  const mainStyle:React.CSSProperties = {
    background:'#F5F5F5',
    display:'flex',
    flexDirection: 'column',
    height:'100vh',
    overflow:'hidden',
  }

  const contextStyle:React.CSSProperties = {
    flex:1,
    background: '#F5F5F5', 
    boxSizing: 'content-box',
    overflowY: 'scroll',
    paddingLeft:'8px',
  }

  return (
    <div style={mainStyle}>
      <div>
        <AppTopBar />
      </div>
      <div style={contextStyle}>
          <div style={{padding:'20px 12px',height: '100%'}}>
            <div style={{paddingBottom:'20px',height: '100%'}}>{prop.children}</div>
          </div>
      </div>
      <div>
        <AppFooterBar />
      </div>
    </div>
  );
}