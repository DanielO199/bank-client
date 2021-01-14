export const GET_FUNDS_REQUEST = 'GET_FUNDS_REQUEST';
export const GET_FUNDS_ERROR = 'GET_FUNDS_ERROR';
export const GET_FUNDS_SUCCESS = 'GET_FUNDS_SUCCESS';
export const GET_SAVINGS_REQUEST = 'GET_SAVINGS_REQUEST';
export const GET_SAVINGS_SUCCESS = 'GET_SAVINGS_SUCCESS';
export const GET_SAVINGS_ERROR = 'GET_SAVINGS_ERROR';

export interface IFundStore {
	imBusy: boolean;
	funds: number;
	savings: number;
	savingsData: [];
	fundsData: [];
}
