import { combineReducers } from 'redux';
import billReducer from 'reducers/billReducer';
import transactionReducer from 'reducers/transactionReducer';

const rootReducer = combineReducers({
	bill: billReducer,
	transaction: transactionReducer
});

export default rootReducer;
