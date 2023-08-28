import ApiClient from '../ApiClient'
const apiClient = new ApiClient();

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API + '/v1'

const GameApi = {

    async getBtcBlockList(data: any) {
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'gm_btc_block_list',
            params: {
                id: data.id,
                status: data.status,
                offset: data.offset,
                pagesize: data.pageSize ? data.pageSize : 50
            }
        }
        return await apiClient.post(API_BASE_URL, { data: params });
    },

    async getBlockCellList(data: any) {
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'gak_btc_green_list',
            params: {
                limit: data.offset,
                pageSize: data.pageSize ? data.pageSize : 50
            }
        }
        return await apiClient.post(API_BASE_URL, { data: params });
    },

    async getDashboardStatistics() {
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'gak_dashboard_statistics',
            params: {}
        }
        return await apiClient.post(API_BASE_URL, { data: params });
    },

    async queryAuthorizationAsGreenActor(address: string, blockHeight: number) {
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'gak_query_authorization_as_green_actor',
            params: {
                greenActorAddress: address,
                blockHeight: blockHeight
            }
        }
        return await apiClient.post(API_BASE_URL, { data: params });
    },

    async queryAuthorizationAsWinner(address: string, saleID: string) {
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'gak_query_authorization_as_winner',
            params: {
                greenActorAddress: address,
                saleID: saleID
            }
        }
        return await apiClient.post(API_BASE_URL, { data: params });
    },

    async getBlockDetails(blockHeight: number) {
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'gak_query_block_details',
            params: {
                blockHeight
            }
        }
        return await apiClient.post(API_BASE_URL, { data: params });
    },
    
    async getBitMap() {
        const params = {
            jsonrpc: "2.0",
            id: Number(Math.random().toString().substring(2)),
            method: 'gak_query_bit_map'
        }
        return await apiClient.post(API_BASE_URL, { data: params });
    }

}

export default GameApi;
