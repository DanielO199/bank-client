import { combineReducers } from 'redux';
import billReducer from 'reducers/billReducer';
import transactionReducer from 'reducers/transactionReducer';

const store = combineReducers({
	bill: billReducer,
	transaction: transactionReducer
});

export default store;
