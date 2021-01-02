import { request } from 'core/utils/request';

export const api = {
	get: function (url, query?, cancelToken?) {
		let config = {
			query
		};

		if (cancelToken) {
			config['cancelToken'] = cancelToken;
		}

		return request(url, config);
	},
	post: function (url, payload) {
		return request(url, {
			method: 'POST',
			data: payload
		});
	},
	put: function (url, payload) {
		return request(url, {
			method: 'PUT',
			data: payload
		});
	},
	delete: function (url) {
		return request(url, { method: 'DELETE' });
	}
};
