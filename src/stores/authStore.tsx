import { IAuthStore } from 'types/authTypes';

export const initialAuthStore: IAuthStore = {
	imBusy: false,
	isLogged: false,
	pinCode: null,
	userId: '',
	accessToken: ''
};
