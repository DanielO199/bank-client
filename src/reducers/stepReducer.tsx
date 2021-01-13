import { NEXT_STEP, PREVIOUS_STEP, INPUT_CHANGE } from 'types/stepTypes';

import { stepStore } from 'stores/stepStore';

const stepReducer = (state = stepStore, action) => {
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

		case 'RESET':
			return stepStore;

		default:
			return { ...state };
	}
};

export default stepReducer;
