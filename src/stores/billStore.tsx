import { IBillStore } from 'types/billTypes';

export const initialState = {
	imBusy: false,
	imBusyAction: false,
	imWithError: false,
	errorMsg: '',
	userBills: [],
	allBills: []
};
