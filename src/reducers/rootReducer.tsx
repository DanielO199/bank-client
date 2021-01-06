import { combineReducers } from 'redux';
import billReducer from 'reducers/billReducer';
import transactionReducer from 'reducers/transactionReducer';
import fundReducer from 'reducers/fundReducer';

const rootReducer = combineReducers({
	bill: billReducer,
	transaction: transactionReducer,
	fund: fundReducer
});

export default rootReducer;
