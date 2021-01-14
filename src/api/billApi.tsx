import { api } from 'utils/api';

export const billApi = {
	getUserBills: function (id, params?) {
		return api.get(`/bills/${id}`, params);
	},
	getAllBills: function (params?) {
		return api.get(`/bills/all`, params);
	},
	create: function (creatorId) {
		return api.post(`/bills`, creatorId);
	}
};
