export const CREATE_NEW_BILL_REQUEST = 'CREATE_NEW_BILL_REQUEST';
export const CREATE_NEW_BILL_SUCCESS = 'CREATE_NEW_BILL_SUCCESS';
export const CREATE_NEW_BILL_ERROR = 'CREATE_NEW_BILL_ERROR';

export interface IBillStore {
	imBusy?: boolean;
	imWithError?: boolean;
	errorMsg?: string;
}

export type BillActionTypes = {
	type?: string;
	bill?: IBillStore;
};
