import { NEXT_STEP, PREVIOUS_STEP } from 'types/stepTypes';

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

export const inputChange = (input, value) => {
	return {
		type: 'INPUT_CHANGE',
		input,
		value
	};
};
