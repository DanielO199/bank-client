import { CREATE_NEW_BILL_REQUEST } from 'common/types/billTypes';
import { IBillStore } from 'interfaces';
import { BillActionTypes } from 'interfaces/IBill';

export const createNewBillAction = (bill: IBillStore) => {
	return {
		type: CREATE_NEW_BILL_REQUEST,
		bill
	};
};
