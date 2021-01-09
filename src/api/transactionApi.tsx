import { api } from 'utils/api';
const userId = '5ff38276fd149e22c08c6f27';
export const transactionApi = {
	list: function (params?) {
		return api.get(`/transactions/5ff38276fd149e22c08c6f27`, params);
	},
	receiveAuthorizationKey: function (data) {
		return api.post(`/transactions`, data);
	},
	create: function (data) {
		return api.post(`/transactions/confirm`, data);
	}
};