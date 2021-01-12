import { api } from 'utils/api';

export const authApi = {
	login: function (data) {
		return api.post(`/login`, data);
	},
	register: function (data) {
		return api.post(`/register`, data);
	},
	resetPassword: function (email) {
		return api.post(`/reset-password`, email);
	},
	changePassword: function (data) {
		return api.post(`/change-password`, data);
	}
};
