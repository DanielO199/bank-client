export const IS_LOGGED = 'IS_LOGGED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export interface IAuthStore {
	imBusy: boolean;
	isLogged: boolean;
	userId: string;
	accessToken: string;
}
