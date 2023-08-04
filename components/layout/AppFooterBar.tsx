"use client"

import React from 'react';
import { GithubOutlined,TwitterOutlined } from '@ant-design/icons';

function AppFooterBar(){

  const divStyle:React.CSSProperties = {
    backgroundColor:'#FFFFFF',
    height:'48px',
    lineHeight: '48px',
    textAlign:'right',
  }

  return (
    <>
      <div style={divStyle}>
          <a style={{fontSize:'1.2em',color:'#00913A'}} href='https://twitter.com/arkreen_network' target='_blank' rel="noreferrer"><TwitterOutlined /></a>
          <a style={{fontSize:'1.2em',paddingInline:'20px',color:'#00913A'}} href='https://github.com/arkreen' target='_blank' rel="noreferrer"><GithubOutlined /></a>
      </div>
      <div></div>
    </>
  )
}

export default AppFooterBar;
