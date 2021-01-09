import { NEXT_STEP, PREVIOUS_STEP } from 'types/paymentTypes';

import { paymentStore } from 'stores/paymentStore';

const paymentReducer = (state = paymentStore, action) => {
	switch (action.type) {
		case NEXT_STEP:
			return {
				...state,
				currentStep: state.currentStep + 1
			};

		case PREVIOUS_STEP:
			return {
				...state,
				currentStep: state.currentStep - 1
			};

		case 'SET_BILL':
			return {
				...state,
				bill: action.payload
			};

		default:
			return { ...state };
	}
};

export default paymentReducer;
