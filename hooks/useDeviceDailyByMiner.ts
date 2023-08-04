import { getSessionStorage,setSessionStorage,removeSessionStorage } from '@/utils/BrowserUtils'
import { useEffect, useState } from 'react'
import {getDates} from '@/utils/DateUtils'
import StatApi from '@/utils/backend/StatApi'
import { formatDate } from '@/utils/DataFormatUtils'
import moment from 'moment'

const key_base = 'owner_daily_reward_cache_'

function useDeviceDailyByMiner(address:string,onboardTime:number) {

    const startTime = formatDate(onboardTime*1000,'yyyyMMdd');
    const endTime = formatDate(Date.now(),'yyyyMMdd');
    const key = key_base+address+'_'+startTime+'_'+endTime
    const [data, setData] = useState<any>(undefined)
    const [loading, setLoading] = useState(true)

    const updateData = () => {
        removeSessionStorage(key)
        fetchData()
    }

    function fetchData() {
        setLoading(true)
        const data = getSessionStorage(key)
        if(data){
            const info = JSON.parse(data)
            setData(info)
            setLoading(false)
        }else {
            const data = {address: address,startTime: startTime,endTime:  endTime,}
            const days = getDates(new Date(Number(onboardTime)*1000), new Date())
            StatApi.statDeviceDailyByMiner(data).then( (deviceDaily:any) => {
                if(!deviceDaily.error && deviceDaily.result.length > 0){
                    const dateArr:any = []
                    const greenEnergyObj:any = {}
                    const dailyRewardObj:any = {}
                    deviceDaily.result.forEach((item:any) => {
                        greenEnergyObj[item.dataDate] = item.energyGenerationIncrement
                        dailyRewardObj[item.dataDate] = item.rewardIncrement
                    });
                    
                    for (let i = 0; i < days.length; i++) {
                        const day = days[i];
                        const dayStr = moment(day).format('yyyy-MM-DD')
                        let energy = 0
                        let reward = 0
                        if(greenEnergyObj[dayStr]) {
                            energy = Number(greenEnergyObj[dayStr]) / 1000
                        }
                        if(dailyRewardObj[dayStr]) {
                            reward = Number(dailyRewardObj[dayStr])
                        }
                        dateArr.push({dataDate:dayStr, value:reward, seriesField:'Reward'})
                        dateArr.push({dataDate:dayStr, value:energy, seriesField:'Energy'})
                    }
                    setData(dateArr)
                    setSessionStorage(key,dateArr)
                    setLoading(false)
                }else {
                    setData([])
                    setLoading(false)
                }
            })
        }
    }

  useEffect(() => {
    if(!data){
      fetchData()
    }
  },[])//eslint-disable-line
  //
  return [loading,data,updateData]
}

export default useDeviceDailyByMiner;