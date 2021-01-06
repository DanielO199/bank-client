import {
	GET_FUNDS_REQUEST,
	GET_FUNDS_SUCCESS,
	GET_FUNDS_ERROR
} from 'types/fundTypes';

import { fundApi } from 'api';

export const fetchAvailableFundsAction = () => async (dispatch) => {
	try {
		dispatch({ type: GET_FUNDS_REQUEST });
		const responseData = await fundApi.get();
		dispatch({ type: GET_FUNDS_SUCCESS, payload: responseData.funds });
	} catch (error) {
		dispatch({ type: GET_FUNDS_ERROR });
	}
};
