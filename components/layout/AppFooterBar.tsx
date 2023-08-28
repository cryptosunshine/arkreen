"use client"

import React from 'react';
import { GithubOutlined,TwitterOutlined } from '@ant-design/icons';
function AppFooterBar(){

  const divStyle:React.CSSProperties = {
    backgroundColor:'#FFFFFF',
    height:'48px',
    width:'100%',
    bottom:'0px',
    display:'flex',
    gap:'20px',
    paddingInline:'20px',
    zIndex:999
  }

  const iconStyle = {
    fontSize:'1.2em',
    color:'var(--arkreen-green)',
    lineHeight: '48px'
  }

  return (
    <div style={divStyle}>
      <div style={{flex:1}}></div>
      <div>
        <a style={iconStyle} href='https://twitter.com/arkreen_network' target='_blank' rel="noreferrer"><TwitterOutlined /></a>
      </div>
      <div>
        <a style={iconStyle} href='https://github.com/arkreen' target='_blank' rel="noreferrer"><GithubOutlined /></a>
      </div>
    </div>
  )
}

export default AppFooterBar;
