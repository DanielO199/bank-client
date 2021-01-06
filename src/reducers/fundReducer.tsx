import { initialState } from 'stores/billStore';

import {
	GET_FUNDS_REQUEST,
	GET_FUNDS_SUCCESS,
	GET_FUNDS_ERROR
} from 'types/fundTypes';

const fundReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FUNDS_REQUEST:
			return {
				imBusy: true,
				imWithError: false,
				errorMsg: '',
				...state
			};

		case GET_FUNDS_SUCCESS:
			return {
				imBusy: false,
				imWithError: false,
				funds: action.payload
			};
		case GET_FUNDS_ERROR:
			return {
				imBusy: false,
				imWithError: true,
				errorMsg: 'Could not load total funds'
			};

		default:
			return { ...state };
	}
};

export default fundReducer;
