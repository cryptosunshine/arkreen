import MarketingApi from '../utils/backend/MarketingApi'
import { getSessionStorage,setSessionStorage,removeSessionStorage } from '@/utils/BrowserUtils'
import { useEffect, useState } from 'react'
import countryJson from '../config/country.json'

const key_base = 'owner_info_cache_'

function useOwnerInfo(owner:string) {

  const [userInfo, setUserInfo] = useState<any>(undefined)
  const [loading, setLoading] = useState(true)

  const updateUserInfo = (address:string) => {
    removeSessionStorage(key_base+address)
    fetchData(address)
  }

  function fetchData(address:string) {
    setLoading(true)
    const userInfo = getSessionStorage(key_base+address)
    if(userInfo){
      const info = JSON.parse(userInfo)
      setUserInfo(info)
      setLoading(false)
    }else {
      MarketingApi.queryOwnerSetting(address).then( (rsp:any) =>{
          if(!rsp.error && rsp.result){
            const info = rsp.result
            countryJson.forEach( (item:any) => {
              if(item.name == info.country){
                info.code = item.code;
              }
            })
            setUserInfo(info)
            setSessionStorage(key_base+address,info)
          }else{
            setUserInfo({})
          }
          setLoading(false)
      })
    }
  }

  useEffect(() => {
    if(!userInfo){
      fetchData(owner)
    }
  },[])//eslint-disable-line
  //
  return [loading,userInfo,updateUserInfo]
}

export default useOwnerInfo;