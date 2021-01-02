import { CREATE_NEW_BILL_REQUEST } from 'types/billTypes';

import { BillActionTypes } from 'types/billTypes';
import { initialState } from 'stores/billStore';

const transactionReducer = (state = initialState, action: BillActionTypes) => {
	switch (action.type) {
		case CREATE_NEW_BILL_REQUEST:
			return {
				...state,
				bill: action.bill
			};

		default:
			return { ...state };
	}
};

export default transactionReducer;
