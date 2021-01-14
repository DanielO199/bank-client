import { IBillStore } from 'types/billTypes';

export const initialBillState: IBillStore = {
	imBusy: false,
	imBusyAction: false,
	imWithError: false,
	errorMsg: '',
	userBills: [],
	allBills: []
};
