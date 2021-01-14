import {
	RECEIVE_AUTHORIZATION_KEY_REQUEST,
	RECEIVE_AUTHORIZATION_KEY_SUCCESS,
	CREATE_TRANSACTION_REQUEST,
	CREATE_TRANSACTION_SUCCESS,
	GET_TRANSACTIONS_REQUEST,
	GET_TRANSACTIONS_SUCCESS,
	GET_TRANSACTIONS_ERROR
} from 'types/transactionTypes';
import { RESET } from 'types/stepTypes';

import { getUserId } from 'utils';
import { transactionApi } from 'api/transactionApi';

export const receiveAuthorizationKeyAction = (data) => async (dispatch) => {
	try {
		dispatch({ type: RECEIVE_AUTHORIZATION_KEY_REQUEST });
		// await transactionApi.receiveAuthorizationKey(data);
		await fetch('http://localhost:5000/api/transactions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		dispatch({ type: RECEIVE_AUTHORIZATION_KEY_SUCCESS });
	} catch (error) {}
};

export const createNewTransactionAction = (data, cb) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_TRANSACTION_REQUEST });
		// const responseData = await transactionApi.create(transaction);
		await fetch('http://localhost:5000/api/transactions/confirm', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		dispatch({ type: CREATE_TRANSACTION_SUCCESS });
		cb();
		dispatch({ type: RESET });
	} catch (error) {}
};

export const fetchTransactionsAction = (params?) => async (dispatch) => {
	try {
		dispatch({ type: GET_TRANSACTIONS_REQUEST });
		const responseData = await transactionApi.list(getUserId(), params);
		dispatch({
			type: GET_TRANSACTIONS_SUCCESS,
			payload: responseData.results
		});
	} catch (error) {
		dispatch({ type: GET_TRANSACTIONS_ERROR });
	}
};
