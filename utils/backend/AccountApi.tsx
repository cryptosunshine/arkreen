//import HttpUtils from '../utils/HttpUtils'
import ApiClient from '../ApiClient'
const apiClient = new ApiClient();
const AccountApi ={
    async list(data:{offset:number,limit?:number}) {
        const OFFSET_DEFAULT:number = 1;
        const LIMIT_DEFAULT:number = 25;
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'net_getAccountList',
            params: {
                offset:data.offset?data.offset:OFFSET_DEFAULT,
                limit:data.limit?data.limit:LIMIT_DEFAULT,
            }
        }
        return await apiClient.post('api/arkreen', { data: params });
    },

    async getAccountByAddress(address:string) {
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'net_getAccountByAddress',
            params: {
                address:address
            }
        }
        return await apiClient.post('api/arkreen', { data: params });
    }
}

export default AccountApi;
