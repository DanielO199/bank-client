import { useSelector } from 'react-redux';

import { IPagination } from 'common/interfaces';
import { RootState } from 'stores';

export const formatBill = (bill) => {
	return bill.match(/.{1,4}/g).join(' ');
};

export const IsLogged = () => {
	const { isLogged } = useSelector((state: RootState) => state.auth);
	return isLogged;
};

export const getUserId = () => {
	const userId = localStorage.getItem('userId');
	return userId;
};

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
