'use client'

import { message } from 'antd';
import { useEffect, useState } from 'react'
import {ShopIcon,DashboardLineIcon,WithdrawIcon,SettingsIcon,MinerIcon,RankIcon} from '@/components/icons/ArkreenIcon'
import {formatDate} from './DataFormatUtils'

export function copyText(text:string){
    const input = document.createElement('input')
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
    message.success('Copied!');
}

interface WindowSize {
    width: number
    height: number
}

export function isMobile() {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}

export function useWindowSize(): WindowSize {
  //
  const ws = {width: 0,height: 0}
  if(typeof window !== 'undefined'){
    ws.width = window.innerWidth
    ws.height = window.innerHeight
  }
  //
  const [windowSize, setWindowSize] = useState<WindowSize>(ws)
  useEffect(() => {
    const handler = () => {
      if(typeof window !== 'undefined'){
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }
    // Set size at the first client-side load
    handler()
    window.addEventListener('resize', handler)
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //
  return windowSize
}

export function jumpTo(url:string,target?:string){
  const domA = document.createElement('a')
  domA.href = url
  domA.target = target?target:'_blank'
  domA.click()
}

const addressList = ['0x7e22efF00FB878319606AA085316E72e19e9761B','0xB4A63B11c68Dd6C4874686bEBFD8e139a5e59935',
                      '0x087f3CeFcfE200B405c584D283aFbd2091067185','0x6661dBa5178598bd15257e323fDB5eB1Ab9e149d',
                      '0xe7422DF4B77D333980fef5351aa5d627A432281d','0x0A81121aD13a7f5974a2237c76C949179e088ace'
                    ]

export function getMenuList(address:string){
  const menuList = [];
  const dashboard = {
    key: 'dashboard',
    sort: '1',
    icon: <DashboardLineIcon/>,
    label: 'Dashboard',
    url: '/dashboard'
  }
  const shop = {
    key: 'shop',
    sort: '2',
    icon: <ShopIcon/>,
    label: 'Shop',
    url: '/shop'
  }
  const withdraw = {
    key: 'withdraw',
    sort: '4',
    icon: <WithdrawIcon />,
    label: 'Withdraw',
    url: '/withdraw'
  }
  const profile = {
    key: 'profile',
    sort: '5',
    icon: <SettingsIcon/>,
    label: 'Profile',
    url: '/profile',
  }
  const onboard = {
    key: 'onboard',
    sort: '5',
    icon: <MinerIcon/>,
    label: 'Onboard',
    url: '/onboard',
  }
  const rank = {
    key: 'rank',
    sort: '5',
    icon: <RankIcon/>,
    label: 'Rank',
    url: '/rank',
  }
  const map = {
    key: 'map',
    sort: '5',
    icon: <WithdrawIcon/>,
    label: 'Map',
    url: '/map',
  }
  const quickPayment = {
    key: 'quick-payment',
    sort: '5',
    icon: <WithdrawIcon/>,
    label: 'QuickPayment',
    url: '/quick-payment',
  }
  const settings = {
    key: 'settings',
    sort: '5',
    icon: <SettingsIcon/>,
    label: 'Settings',
    url: '/settings',
  }
  const game = {
    key: 'game',
    sort: '5',
    icon: <SettingsIcon/>,
    label: 'Game',
    url: '/game',
  }
  //
  menuList.push(dashboard);
  menuList.push(shop)
  menuList.push(withdraw)
  //
  
  //
  if(addressList.includes(address)){
    //menuList.push(onboard)
    //menuList.push(map)
    //menuList.push(quickPayment)
    menuList.push(rank)
    menuList.push(profile)
    menuList.push(settings)
    //menuList.push(game)
  }
  
  return menuList;
}

const log_key = "Arkreen_Console_LogHistory"
const log_set_num_key = "Arkreen_Console_LogHistory_line"
const event_name = "Arkreen_Console_Set_Item_Event"

export function useLogHistory(){
  const [message,setMessage] = useState<any>(getLogHistory())
  useEffect(() => {
    function rightCartData() {
      setMessage(getLogHistory());
    }

    window.addEventListener(event_name, rightCartData);

    return () => {
      window.removeEventListener(event_name, rightCartData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return message
}

export function getLogHistory(){
  if (typeof window === "undefined") {
    return;
  }
  return window?.sessionStorage?.getItem(log_key)
}

export function setLogHistory(message:string){
  if (typeof window === "undefined") {
    return;
  }
  let num = Number(window.sessionStorage.getItem(log_set_num_key));
  if(num>100){
    const str = formatDate(Number(new Date()),'yyyy-MM-dd HH:mm:ss')+' - 日志信息超过阈值[100]，已自动清空历史数据';
    window.sessionStorage.setItem(log_key,str);
    window.sessionStorage.setItem(log_set_num_key,'1');
    num = 1
  }
  const old = getLogHistory()
  const str = formatDate(Number(new Date()),'yyyy-MM-dd HH:mm:ss')+' - ' + message + '\r\n\r\n'+ old 
  window.sessionStorage.setItem(log_key,str);
  window.dispatchEvent(new Event(event_name));
  window.sessionStorage.setItem(log_set_num_key,num?''+(num+1):'1');
}

export function clearLogHistory(){
  if (typeof window === "undefined") {
    return;
  }
  window.sessionStorage.setItem(log_key,'')
  window.sessionStorage.removeItem(log_set_num_key)
  setLogHistory('清空日志信息')
}

export function callWalletApp(type:string) {
    if (typeof window !== "undefined") {
      if(type.toLowerCase() == 'metamask'){
        window.location.href = 'wc://'
      }else if(type.toLowerCase() =='imtoken'){
        window.location.href = 'imtokenv2://'
      }else {
        console.error("callWalletApp error,type not found.")
      }
    }
}

export function getLocalStorage(key:string){
  if (typeof window === "undefined") {
    return;
  }
  return window.localStorage.getItem(key)
}

export function setLocalStorage(key:string,value:string){
  if (typeof window === "undefined") {
    return;
  }
  return window.localStorage.setItem(key,value)
}

export function getSessionStorage(key:string){
  if (typeof window === "undefined") {
    return;
  }
  return window.sessionStorage.getItem(key)
}

export function setSessionStorage(key:string,value:any){
  if (typeof window === "undefined") {
    return;
  }
  return window.sessionStorage.setItem(key,JSON.stringify(value))
}

export function removeSessionStorage(key:string){
  if (typeof window === "undefined") {
    return;
  }
  return window.sessionStorage.removeItem(key)
}

const defaultPaymentCurrencyKey = 'default_payment_currency_'

export function getDefaultPaymentCurrency(address:string){
  if (typeof window === "undefined") {
    return;
  }
  return window.localStorage.getItem(defaultPaymentCurrencyKey+address)
}

export function setDefaultPaymentCurrency(address:string,currency:string){
  if (typeof window === "undefined") {
    return;
  }
  return window.localStorage.setItem(defaultPaymentCurrencyKey+address,currency)
}
