export const transactionStore = {
	imBusy: false,
	imWithError: false,
	errorMsg: '',
	transactions: [],
	isReceived: false,
	pagination: {
		current: 1,
		pageSize: 1,
		total: 0
	}
};
