import { api } from 'utils/api';

export const fundApi = {
	getFunds: function (id?, params?) {
		return api.get(`/bills/funds/5ff38276fd149e22c08c6f27`, params);
	},
	getSavings: function (id?, params?) {
		return api.get(`/bills/savings/5ff38276fd149e22c08c6f27`, params);
	}
};
