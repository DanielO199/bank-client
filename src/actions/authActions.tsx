import {
	IS_LOGGED,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	REGISTER_REQUEST,
	REGISTER_SUCCESS
} from 'types/authTypes';

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

export const registerAction = (data) => async (dispatch) => {
	try {
		dispatch({ type: REGISTER_REQUEST });

		const rawResponse = await fetch(
			'http://localhost:5000/api/users/register',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
		);
		const content = await rawResponse.json();

		dispatch({ type: REGISTER_SUCCESS, payload: content });
	} catch (error) {}
};

export const isLoggedAction = () => {
	return {
		type: IS_LOGGED
	};
};
