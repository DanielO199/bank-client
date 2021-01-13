import { api } from 'utils/api';

export const fundApi = {
	getFunds: function (id, params?) {
		return api.get(`/bills/funds/${id}`, params);
	},
	getSavings: function (id, params?) {
		return api.get(`/bills/savings/${id}`, params);
	}
};
