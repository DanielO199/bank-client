import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableFundsAction } from 'actions/fundActions';
import { Spinner } from 'common/components';
// import { RootState } from 'stores';

export const RecentTransations = () => {
	// const funds = useSelector((state: RootState) => state.fund.funds);
	// const { funds, imBusy, imWithError } = useSelector(
	// 	(state: RootState) => state.fund
	// );
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAvailableFundsAction());
	}, []);
	// console.log(funds);
	if (true) return <Spinner />;
	// return <div>{funds}</div>;
};
