import axios from 'axios';
import querystring from 'query-string';

import { config } from 'common/globals/config';
const { apiUrl } = config;

export const REQUEST_CANCEL_MESSAGE = 'Operation canceled due to new request.';

const instance = axios.create({
	baseURL: apiUrl,
	timeout: 60000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

instance.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.put['Content-Type'] = 'application/json';
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

const logger = (data, url) => {
	if (process.env.NODE_ENV === 'development')
		console.log(
			url,
			`\n\t status: ${data.status}`,
			`\n\t payload: `,
			data.data
		);
	return data.data;
};

export const request = (_url, _config: any = {}) => {
	let req: any = {
		url: _url,
		..._config
	};

	if (!req.headers) {
		req.headers = {};
	}

	if (_config.multipart) {
		req.headers['content-type'] = 'multipart/form-data';
	}

	if (_config.query && Object.keys(_config.query).length !== 0) {
		Object.keys(_config.query).forEach((key) => {
			if (!_config.query[key]) {
				delete _config.query[key];
			}
		});
		req.url += '?' + querystring.stringify(_config.query);
	}

	return instance
		.request(req)
		.then((data) => {
			return logger(data, _url);
		})
		.catch((error) => {
			console.log('error', error);
			if (error.response) {
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log('error', error.message);
			}

			throw error;
		});
};
