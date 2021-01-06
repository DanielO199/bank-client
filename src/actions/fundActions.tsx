import {
	CREATE_NEW_BILL_REQUEST,
	GET_BILLS_REQUEST,
	GET_BILLS_ERROR
} from 'types/billTypes';
import { IBillStore } from 'types/billTypes';
import { BillActionTypes } from 'types/billTypes';

import { authApi } from 'api/authApi';
const INIT_LOADING_DATA = 'INIT_LOADING_DATA';
export const createNewBillAction = (bill: IBillStore) => {
	return {
		type: CREATE_NEW_BILL_REQUEST,
		bill
	};
};

export const fetchAvailableFundsAction = () => async (dispatch) => {
	try {
		dispatch({ type: INIT_LOADING_DATA });
		const responseData = await authApi.getB();
		console.log(responseData);
		dispatch({ type: GET_BILLS_REQUEST, payload: responseData });
	} catch (error) {
		dispatch({ type: GET_BILLS_ERROR });
	}
};
