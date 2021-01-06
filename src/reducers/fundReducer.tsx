import { BillActionTypes } from 'types/billTypes';
import { initialState } from 'stores/billStore';

const INIT_LOADING_DATA = 'INIT_LOADING_DATA';

const fundReducer = (state = initialState, action: BillActionTypes) => {
	switch (action.type) {
		case INIT_LOADING_DATA:
			return {
				imBusy: true,
				imWithError: false,
				errorMsg: '',
				...state
			};

		default:
			return { ...state };
	}
};

export default fundReducer;
