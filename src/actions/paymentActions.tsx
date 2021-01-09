import { NEXT_STEP, PREVIOUS_STEP, SET_BILL } from 'types/paymentTypes';

export const nextStep = () => {
	return {
		type: NEXT_STEP
	};
};

export const prevStep = () => {
	return {
		type: PREVIOUS_STEP
	};
};

export const setBill = (payload) => {
	return {
		type: SET_BILL,
		payload
	};
};
