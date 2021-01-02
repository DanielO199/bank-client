import { api } from 'utils/api';

export const authApi = {
	getB: function (params?) {
		return api.get(`/users/clients`, params);
	},
	login: function (data) {
		return api.post(`/auth/login`, data);
	},
	register: function (data) {
		return api.post(`/customers`, data);
	},
	resetPassword: function (email) {
		return api.post(`/users/reset-password`, email);
	},
	changePassword: function (data) {
		return api.post(`/users/change-password`, data);
	}
};
