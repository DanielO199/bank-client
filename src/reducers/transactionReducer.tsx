import {
	RECEIVE_AUTHORIZATION_KEY_REQUEST,
	RECEIVE_AUTHORIZATION_KEY_SUCCESS,
	CREATE_TRANSACTION_REQUEST,
	CREATE_TRANSACTION_SUCCESS,
	GET_TRANSACTIONS_REQUEST,
	GET_TRANSACTIONS_SUCCESS
} from 'types/transactionTypes';

import { initialTransactionStore } from 'stores/transactionStore';

const transactionReducer = (state = initialTransactionStore, action) => {
	switch (action.type) {
		case RECEIVE_AUTHORIZATION_KEY_REQUEST:
			return {
				...state,
				imBusy: true,
				transactionCreated: false
			};

		case RECEIVE_AUTHORIZATION_KEY_SUCCESS:
			return {
				...state,
				imBusy: false,
				isReceived: true
			};

		case CREATE_TRANSACTION_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case CREATE_TRANSACTION_SUCCESS:
			return {
				...state,
				imBusy: false,
				isReceived: false
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
				transactions: action.payload.transactions,
				pagination: action.payload.pagination
			};

		default:
			return { ...state };
	}
};

export default transactionReducer;
