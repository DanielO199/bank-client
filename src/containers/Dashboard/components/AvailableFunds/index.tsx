import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableFundsAction } from 'actions/fundActions';
import { Spinner } from 'common/components';
import { RootState } from 'stores';
import { Wrapper } from '../Savings/styles';

export const AvailableFunds = () => {
	// const funds = useSelector((state: RootState) => state.fund.funds);
	const { funds, imBusy, imWithError } = useSelector(
		(state: RootState) => state.fund
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAvailableFundsAction());
	}, []);
	console.log(funds);
	if (imBusy) return <Spinner />;
	return <Wrapper>{funds}</Wrapper>;
};
