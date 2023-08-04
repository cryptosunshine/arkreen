import StatApi from '@/utils/backend/StatApi'
import { getSessionStorage,setSessionStorage,removeSessionStorage } from '@/utils/BrowserUtils'
import { useEffect, useState } from 'react'
import moment from 'moment'

const key_base = 'Network_Global_Info_'

function useNetworkGlobal() {

  const [networkGlobalInfo, setNetworkGlobalInfo] = useState<any>(undefined)
  const [loading, setLoading] = useState(true)

  const key = moment.utc().format('yyyyMMDD')

  const updateGlobalInfo = () => {
    removeSessionStorage(key_base+key)
    fetchData()
  }

  function fetchData() {
    setLoading(true)
    StatApi.stateNetworkTrend().then( (rsp:any) =>{
      const info = {
          accounts: 0,
          capacity: 0,
          miners: 0,
          greenEnergy: 0,
          capacityIncrement: 0,
          minersIncrement: 0,
          greenEnergyIncrement: 0,
          rewardIncrement:0,
      }
      if(!rsp.error){
          if(rsp.result){
          info.accounts= rsp.result.owners?rsp.result.owners:0
          info.capacity=rsp.result.power?rsp.result.power:0
          info.miners=rsp.result.miners?rsp.result.miners:0
          info.greenEnergy= rsp.result.energy?rsp.result.energy:0
          }
      }
      setNetworkGlobalInfo(info)
      setLoading(false)
      setSessionStorage(key_base+key,info)
  })
  }

  useEffect(() => {
    if(!networkGlobalInfo){
      fetchData()
    }
  },[])//eslint-disable-line
  //
  return [loading,networkGlobalInfo,updateGlobalInfo]
}

export default useNetworkGlobal;