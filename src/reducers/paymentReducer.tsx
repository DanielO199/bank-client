import { NEXT_STEP, PREVIOUS_STEP, INPUT_CHANGE } from 'types/paymentTypes';

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

		case INPUT_CHANGE:
			return {
				...state,
				[action.input]: action.value
			};

		default:
			return { ...state };
	}
};

export default paymentReducer;
