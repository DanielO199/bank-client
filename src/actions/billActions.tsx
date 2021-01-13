import {
	CREATE_NEW_BILL_REQUEST,
	CREATE_NEW_BILL_SUCCESS,
	GET_USER_BILLS_REQUEST,
	GET_USER_BILLS_SUCCESS,
	GET_USER_BILLS_ERROR,
	GET_ALL_BILLS_REQUEST,
	GET_ALL_BILLS_SUCCESS,
	GET_ALL_BILLS_ERROR
} from 'types/billTypes';
import { IBillStore } from 'types/billTypes';

import { getUserId } from 'utils';
import { billApi } from 'api/billApi';

export const createNewBillAction = (creatorId: string) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_NEW_BILL_REQUEST });
		// const responseData = await billApi.create(creatorId);
		const rawResponse = await fetch('http://localhost:5000/api/bills', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ creatorId: getUserId() })
		});
		const content = await rawResponse.json();

		dispatch({ type: CREATE_NEW_BILL_SUCCESS, payload: content.bill });
	} catch (error) {
		dispatch({ type: GET_USER_BILLS_ERROR });
	}
};

export const fetchUserBillsAction = () => async (dispatch) => {
	console.log('1');
	try {
		dispatch({ type: GET_USER_BILLS_REQUEST });
		const responseData = await billApi.getUserBills(getUserId());

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
