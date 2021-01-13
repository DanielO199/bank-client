import { combineReducers } from 'redux';
import authReducer from './authReducer';
import billReducer from 'reducers/billReducer';
import transactionReducer from 'reducers/transactionReducer';
import fundReducer from 'reducers/fundReducer';
import stepReducer from './stepReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	bill: billReducer,
	transaction: transactionReducer,
	fund: fundReducer,
	step: stepReducer
});

export default rootReducer;
