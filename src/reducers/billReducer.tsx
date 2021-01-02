import { CREATE_NEW_BILL_REQUEST, GET_BILLS_REQUEST } from 'types/billTypes';

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

		default:
			return { ...state };
	}
};

export default billReducer;
