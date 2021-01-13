import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	REGISTER_REQUEST,
	REGISTER_SUCCESS
} from 'types/authTypes';

import { billApi } from 'api/billApi';

export const loginAction = (data) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });

		const rawResponse = await fetch('http://localhost:5000/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const content = await rawResponse.json();

		localStorage.setItem('accessToken', content.token);
		localStorage.setItem('userId', content.userId);
		dispatch({ type: LOGIN_SUCCESS, payload: content });
	} catch (error) {}
};

export const isLoggedAction = () => {
	return {
		type: 'IS_LOGGED'
	};
};

export const registerAction = () => async (dispatch) => {
	console.log('1');
	try {
		// dispatch({ type: REGISTER_REQUEST });
		// const responseData = await billApi.getUserBills();
		// dispatch({ type: REGISTER_SUCCESS, payload: responseData.bills });
	} catch (error) {}
};
