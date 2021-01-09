export const transactionStore = {
	imBusy: false,
	imWithError: false,
	errorMsg: '',
	availableFunds: 0,
	savings: 0,
	transactions: [],
	recentTransactions: [],
	pagination: {
		current: 1,
		pageSize: 1,
		total: 0
	}
};
