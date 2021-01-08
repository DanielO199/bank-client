import {
	CREATE_TRANSACTION_REQUEST,
	CREATE_TRANSACTION_SUCCESS,
	GET_TRANSACTIONS_REQUEST,
	GET_TRANSACTIONS_SUCCESS,
	GET_TRANSACTIONS_ERROR
} from 'types/transactionTypes';

import { BillActionTypes } from 'types/billTypes';
import { transactionStore } from 'stores/transactionStore';

const transactionReducer = (
	state = transactionStore,
	action: BillActionTypes
) => {
	switch (action.type) {
		case CREATE_TRANSACTION_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case GET_TRANSACTIONS_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case GET_TRANSACTIONS_SUCCESS:
			return {
				...state,
				imBusy: false,
				transactions: action.payload
			};

		default:
			return { ...state };
	}
};

export default transactionReducer;
