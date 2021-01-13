import { api } from 'utils/api';
const userId = '5ff38276fd149e22c08c6f27';
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
