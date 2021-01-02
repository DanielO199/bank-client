import {
	CREATE_NEW_BILL_REQUEST,
	GET_BILLS_REQUEST,
	GET_BILLS_ERROR
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

		case GET_BILLS_REQUEST:
			return {
				bills: action.payload
			};

		case GET_BILLS_ERROR:
			return { ...state };

		default:
			return { ...state };
	}
};

export default billReducer;
