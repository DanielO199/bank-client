import { CREATE_NEW_BILL_REQUEST } from 'common/constants/billConsts';

import { BillActionTypes } from 'interfaces/IBill';
import { initialState } from 'stores/billStore';

const transactionReducer = (state = initialState, action: BillActionTypes) => {
	switch (action.type) {
		case CREATE_NEW_BILL_REQUEST:
			return {
				...state,
				bill: action.bill
			};

		default:
			break;
	}
};

export default transactionReducer;
