import {
	CREATE_NEW_BILL_REQUEST,
	GET_USER_BILLS_REQUEST,
	GET_USER_BILLS_SUCCESS,
	GET_USER_BILLS_ERROR,
	GET_ALL_BILLS_REQUEST,
	GET_ALL_BILLS_SUCCESS,
	GET_ALL_BILLS_ERROR
} from 'types/billTypes';
import { IBillStore } from 'types/billTypes';

import { billApi } from 'api/billApi';

export const createNewBillAction = (bill: IBillStore) => {
	return {
		type: CREATE_NEW_BILL_REQUEST,
		bill
	};
};

export const fetchUserBillsAction = () => async (dispatch) => {
	console.log('1');
	try {
		dispatch({ type: GET_USER_BILLS_REQUEST });
		const responseData = await billApi.getUserBills();

		dispatch({ type: GET_USER_BILLS_SUCCESS, payload: responseData.bills });
	} catch (error) {
		dispatch({ type: GET_USER_BILLS_ERROR });
	}
};

export const fetchAllBillsAction = () => async (dispatch) => {
	console.log('1');
	try {
		dispatch({ type: GET_ALL_BILLS_REQUEST });
		const responseData = await billApi.getAllBills();
		console.log(responseData);

		dispatch({ type: GET_ALL_BILLS_SUCCESS, payload: responseData.bills });
	} catch (error) {
		dispatch({ type: GET_ALL_BILLS_ERROR });
	}
};
