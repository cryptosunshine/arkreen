//import HttpUtils from '../utils/HttpUtils'
import ApiClient from '../ApiClient'
const apiClient = new ApiClient();

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API +'/v1'
const version = process.env.NEXT_PUBLIC_MARKETING_API_VERSION


async function queryOwnerSetting(owner:any) {
    const params = {
        jsonrpc: "2.0",
        id: Number(Math.random().toString().substring(2)),
        method: 'ms_queryOwnerSetting',
        params: {
            version:version,
            owner:owner
        }
    }
    const resp:any = await apiClient.post(API_BASE_URL,{ data: params })
    return resp;
}


const MarketingApi ={
    queryOwnerSetting:queryOwnerSetting,
}

export default MarketingApi;