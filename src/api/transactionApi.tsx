import { api } from 'utils/api';

export const transactionApi = {
	list: function (id, params?) {
		return api.get(`/transactions/${id}`, params);
	},
	receiveAuthorizationKey: function (data) {
		return api.post(`/transactions`, data);
	},
	create: function (data) {
		return api.post(`/transactions/confirm`, data);
	}
};
