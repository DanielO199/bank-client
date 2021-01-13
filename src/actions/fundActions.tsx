import {
	GET_FUNDS_REQUEST,
	GET_FUNDS_SUCCESS,
	GET_FUNDS_ERROR,
	GET_SAVINGS_REQUEST,
	GET_SAVINGS_SUCCESS,
	GET_SAVINGS_ERROR
} from 'types/fundTypes';

import { getUserId } from 'utils';
import { fundApi } from 'api';

export const fetchAvailableFundsAction = () => async (dispatch) => {
	try {
		dispatch({ type: GET_FUNDS_REQUEST });
		const responseData = await fundApi.getFunds(getUserId());
		dispatch({ type: GET_FUNDS_SUCCESS, payload: responseData });
	} catch (error) {
		dispatch({ type: GET_FUNDS_ERROR });
	}
};

export const fetchSavingsAction = () => async (dispatch) => {
	try {
		dispatch({ type: GET_SAVINGS_REQUEST });
		const responseData = await fundApi.getSavings(getUserId());
		console.log(responseData);
		dispatch({ type: GET_SAVINGS_SUCCESS, payload: responseData });
	} catch (error) {
		dispatch({ type: GET_SAVINGS_ERROR });
	}
};
