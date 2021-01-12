import { combineReducers } from 'redux';
import authReducer from './authReducer';
import billReducer from 'reducers/billReducer';
import transactionReducer from 'reducers/transactionReducer';
import fundReducer from 'reducers/fundReducer';
import paymentReducer from './paymentReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	bill: billReducer,
	transaction: transactionReducer,
	fund: fundReducer,
	payment: paymentReducer
});

export default rootReducer;
