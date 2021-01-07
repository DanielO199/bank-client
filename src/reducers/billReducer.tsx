import {
	CREATE_NEW_BILL_REQUEST,
	GET_USER_BILLS_REQUEST,
	GET_USER_BILLS_SUCCESS,
	GET_USER_BILLS_ERROR,
	GET_ALL_BILLS_REQUEST,
	GET_ALL_BILLS_SUCCESS,
	GET_ALL_BILLS_ERROR
} from 'types/billTypes';

import { BillActionTypes } from 'types/billTypes';
import { initialState } from 'stores/billStore';

const billReducer = (state = initialState, action: BillActionTypes) => {
	switch (action.type) {
		case CREATE_NEW_BILL_REQUEST:
			return {
				...state,
				bill: action.bill
			};

		case GET_USER_BILLS_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case GET_USER_BILLS_SUCCESS:
			return {
				...state,
				imBusy: false,
				userBills: action.payload
			};

		case GET_USER_BILLS_ERROR:
			return { ...state };

		default:
			return { ...state };
	}
};

export default billReducer;
