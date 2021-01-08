import { api } from 'utils/api';
const userId = '5ff38276fd149e22c08c6f27';
export const billApi = {
	getUserBills: function (params?) {
		return api.get(`/bills/5ff38276fd149e22c08c6f27`, params);
	},
	getAllBills: function (params?) {
		return api.get(`/bills`, params);
	},
	create: function (creatorId) {
		return api.post(`/bills`, creatorId);
	}
};
