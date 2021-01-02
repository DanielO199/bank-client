export const CREATE_NEW_BILL_REQUEST = 'CREATE_NEW_BILL_REQUEST';
export const CREATE_NEW_BILL_SUCCESS = 'CREATE_NEW_BILL_SUCCESS';
export const CREATE_NEW_BILL_ERROR = 'CREATE_NEW_BILL_ERROR';
export const GET_BILLS_REQUEST = 'GET_BILLS_REQUEST';
export const GET_BILLS_ERROR = 'GET_BILLS_ERROR';

//ZAMIAST FETCH TO GET

export interface IBillStore {
	imBusy?: boolean;
	imWithError?: boolean;
	errorMsg?: string;
}

export interface IBill {
	id: string;
	billNumber: string;
	name: string;
	money: number;
}

export type BillActionTypes = {
	type?: string;
	bill?: IBillStore;
	payload: IBill[];
};
