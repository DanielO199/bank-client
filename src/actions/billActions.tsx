import {
	CREATE_NEW_BILL_REQUEST,
	GET_BILLS_REQUEST,
	GET_BILLS_ERROR
} from 'types/billTypes';
import { IBillStore } from 'types/billTypes';
import { BillActionTypes } from 'types/billTypes';

import { authApi } from 'api/authApi';

export const createNewBillAction = (bill: IBillStore) => {
	return {
		type: CREATE_NEW_BILL_REQUEST,
		bill
	};
};

export const fetchBillsAction = () => async (dispatch) => {
	console.log('1');
	try {
		const responseData = await authApi.getB();
		console.log(responseData);
		dispatch({ type: GET_BILLS_REQUEST, payload: responseData });
	} catch (error) {
		dispatch({ type: GET_BILLS_ERROR });
	}
};
