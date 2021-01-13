import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	REGISTER_REQUEST,
	REGISTER_SUCCESS
} from 'types/authTypes';

import { authStore } from 'stores/authStore';

const authReducer = (state = authStore, action) => {
	switch (action.type) {
		case 'IS_LOGGED':
			return {
				isLogged: true
			};

		case LOGIN_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				imBusyAction: false,
				isLogged: true,
				userId: action.payload.userId,
				accessToken: action.payload.token
			};

		case REGISTER_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case REGISTER_SUCCESS:
			return {
				...state,
				imBusy: false,
				userBills: action.payload
			};

		default:
			return { ...state };
	}
};

export default authReducer;
