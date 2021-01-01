export interface IBillStore {
	imBusy?: boolean;
	imWithError?: boolean;
	errorMsg?: string;
}

export type BillActionTypes = {
	type?: string;
	bill?: IBillStore;
};
