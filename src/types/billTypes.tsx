export const CREATE_NEW_BILL_REQUEST = 'CREATE_NEW_BILL_REQUEST';
export const CREATE_NEW_BILL_SUCCESS = 'CREATE_NEW_BILL_SUCCESS';
export const CREATE_NEW_BILL_ERROR = 'CREATE_NEW_BILL_ERROR';
export const GET_USER_BILLS_REQUEST = 'GET_USER_BILLS_REQUEST';
export const GET_USER_BILLS_SUCCESS = 'GET_USER_BILLS_SUCCESS';
export const GET_USER_BILLS_ERROR = 'GET_USER_BILLS_ERROR';
export const GET_ALL_BILLS_REQUEST = 'GET_ALL_BILLS_REQUEST';
export const GET_ALL_BILLS_SUCCESS = 'GET_ALL_BILLS_SUCCESS';
export const GET_ALL_BILLS_ERROR = 'GET_ALL_BILLS_ERROR';

export interface IBillStore {
	imBusy: boolean;
	imBusyAction: boolean;
	imWithError: boolean;
	errorMsg: string;
	userBills: [];
	allBills: [];
}

export interface IBill {
	id: string;
	billNumber: string;
	name: string;
	money: number;
}
