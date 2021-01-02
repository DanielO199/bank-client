import { IPagination } from 'core/interfaces/Pagination';
import { createBrowserHistory } from 'history';
import querystring from 'query-string';

export const getParameterByName = (name, findIn = window.location.href) => {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(findIn);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

export const paginate = (
	limit: number = 25,
	page: number = 1,
	totalPages: number = 0
): IPagination => {
	return {
		limit: limit,
		totalPages: totalPages,
		activePage: page,
		nextPage: totalPages > page ? page + 1 : totalPages,
		prevPage: page > 1 ? page - 1 : page,
		firstPage: 1
	};
};

export const updateURLWithQueryParams = (params) => {
	let history = createBrowserHistory();
	let pathname = window.location.hash;

	const queryParamStartIndex = window.location.hash.indexOf('?');
	if (queryParamStartIndex !== -1) {
		pathname = `${window.location.hash.substr(0, queryParamStartIndex)}`;
	}

	history.push({
		pathname: `/${pathname}`,
		search: `?${querystring.stringify(params)}`
	});
};