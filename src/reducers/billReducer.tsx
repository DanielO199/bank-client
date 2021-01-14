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

import { IAction } from 'common/interfaces';
import { initialBillState } from 'stores/billStore';

const billReducer = (state = initialBillState, action: IAction) => {
	switch (action.type) {
		case CREATE_NEW_BILL_REQUEST:
			return {
				...state,
				imBusyAction: true
			};

		case CREATE_NEW_BILL_SUCCESS:
			return {
				...state,
				imBusyAction: false,
				userBills: [...state.userBills, action.payload]
			};

		case GET_USER_BILLS_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case GET_USER_BILLS_SUCCESS:
			return {
				...state,
				imBusy: false,
				userBills: action.payload
			};

		case GET_USER_BILLS_ERROR:
			return { ...state };

		case GET_ALL_BILLS_REQUEST:
			return {
				...state,
				imBusy: true
			};

		case GET_ALL_BILLS_SUCCESS:
			return {
				...state,
				imBusy: false,
				allBills: action.payload
			};

		case GET_ALL_BILLS_ERROR:
			return { ...state };

		default:
			return { ...state };
	}
};

export default billReducer;
