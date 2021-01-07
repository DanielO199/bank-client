import { fundStore } from 'stores/fundStore';

import {
	GET_FUNDS_REQUEST,
	GET_FUNDS_SUCCESS,
	GET_FUNDS_ERROR,
	GET_SAVINGS_REQUEST,
	GET_SAVINGS_SUCCESS,
	GET_SAVINGS_ERROR
} from 'types/fundTypes';

const fundReducer = (state = fundStore, action) => {
	switch (action.type) {
		case GET_FUNDS_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case GET_FUNDS_SUCCESS:
			return {
				...state,
				imBusy: false,
				funds: action.payload
			};
		case GET_FUNDS_ERROR:
			return {
				...state,
				imBusy: false,
				imWithError: true,
				errorMsg: 'Could not load total funds'
			};

		case GET_SAVINGS_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case GET_SAVINGS_SUCCESS:
			return {
				...state,
				imBusy: false,
				savingsData: action.payload
			};
		case GET_SAVINGS_ERROR:
			return {
				...state,
				imBusy: false,
				imWithError: true,
				errorMsg: 'Could not load savings'
			};

		default:
			return { ...state };
	}
};

export default fundReducer;
