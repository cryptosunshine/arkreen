//import HttpUtils from '../utils/HttpUtils'
import ApiClient from '../ApiClient'
const apiClient = new ApiClient();
type MinerRequestType = {
    offset?: number
    limit?: number
    type?: number
    status?: number
    address?: string
}

async function list(data: MinerRequestType) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_getMinerList',
        params: {
            offset: data?.offset ? data.offset : 1,
            limit: data?.limit ? data.limit : 25,
            type: data.type,
            status: data.status,
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}

async function getMinerListByOwner(data: MinerRequestType) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_getMinerListByOwner',
        params: {
            address: data.address,
            offset: (data?.offset) ? data.offset : 1,
            limit: (data?.limit) ? data.limit : 25,
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}

async function getMinerByAddress(address: string) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'net_getMinerByAddress',
        params: {
            address: address
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}

async function getTmsOfMinerByOwner(address: string) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'rms_getTmsOfminerByOwner',
        params: {
            owner: address
        }
    }
    return await apiClient.post('api/arkreen', { data: params });
}



const MinerApi = {
    list: list,
    getMinerListByOwner: getMinerListByOwner,
    getMinerByAddress: getMinerByAddress,
    getTmsOfMinerByOwner: getTmsOfMinerByOwner,
}

export default MinerApi;