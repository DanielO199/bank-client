import { NEXT_STEP, PREVIOUS_STEP, INPUT_CHANGE } from 'types/stepTypes';

import { initialStepStore } from 'stores/stepStore';

const stepReducer = (state = initialStepStore, action) => {
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
			return initialStepStore;

		default:
			return { ...state };
	}
};

export default stepReducer;
