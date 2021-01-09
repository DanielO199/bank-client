import {
	CREATE_TRANSACTION_REQUEST,
	CREATE_TRANSACTION_SUCCESS,
	GET_TRANSACTIONS_REQUEST,
	GET_TRANSACTIONS_SUCCESS,
	GET_TRANSACTIONS_ERROR
} from 'types/transactionTypes';

import { transactionApi } from 'api/transactionApi';

export const createNewTransactionAction = (transaction) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_TRANSACTION_REQUEST });
		const responseData = await transactionApi.create(transaction);

		dispatch({ type: CREATE_TRANSACTION_SUCCESS, payload: responseData.bill });
	} catch (error) {
		// dispatch({ type: GET_USER_BILLS_ERROR });
	}
};

export const fetchTransactionsAction = (params?) => async (dispatch) => {
	try {
		dispatch({ type: GET_TRANSACTIONS_REQUEST });
		const responseData = await transactionApi.list(params);
		dispatch({
			type: GET_TRANSACTIONS_SUCCESS,
			payload: responseData.results
		});
	} catch (error) {
		dispatch({ type: GET_TRANSACTIONS_ERROR });
	}
};
