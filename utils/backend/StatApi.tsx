//import HttpUtils from '../utils/HttpUtils'
import ApiClient from '../ApiClient'
const apiClient = new ApiClient();
async function statMinerGreenEnergyTrend(data?: any) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_statMinerGreenEnergyTrend',
        params: {
            address: data.address,
            endTime: data.endTime,
            startTime: data.startTime
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}

async function statMinerDailyReward(data?: any) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_statMinerDailyReward',
        params: {
            address: data.address,
            endTime: data.endTime,
            startTime: data.startTime
        }
    }
    return await apiClient.post('api/arkreen',params);
}

async function statOwnerDailyReward(data?: any) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_statDeviceDailyByOwner',
        params: {
            ownerAddress: data.address,
            endDay: data.endTime,
            startDay: data.startTime
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}


async function statRealTimeByOwnerAddress(address: string) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_statRealTimeByOwnerAddress',
        params: {
            ownerAddress: address
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}

async function search(criteria: string) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_search',
        params: {
            "criteria": criteria
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}

async function stateNetworkTrend() {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_statNetwork',
        params: {}
    }
    return await apiClient.post('api/arkreen', { data: params });
}

async function statDeviceDaily(ownerAddress?:string) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_statDeviceDaily',
        params: ownerAddress?{ownerAddress:ownerAddress}:{}
    }
    return await apiClient.post('api/arkreen', { data: params });
   
}

async function statDeviceDailyByMiner(data?: any) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_statDeviceDailyByMiner',
        params: {
            minerAddress: data.address,
            endDay: data.endTime,
            startDay: data.startTime
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}


const StatApi ={
    statMinerGreenEnergyTrend:statMinerGreenEnergyTrend,
    statMinerDailyReward:statMinerDailyReward,
    stateNetworkTrend:stateNetworkTrend,
    statOwnerDailyReward:statOwnerDailyReward,
    statDeviceDaily:statDeviceDaily,
    search:search,
    statDeviceDailyByMiner:statDeviceDailyByMiner,
    statRealTimeByOwnerAddress:statRealTimeByOwnerAddress
}

export default StatApi;