import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableFundsAction } from 'actions/fundActions';
import { RootState } from 'stores';

export const AvailableFunds = () => {
	// const  funds  = useSelector(
	// 	(state: RootState) => state.fund.funds
	// );
	const { funds, imBusy, imWithError } = useSelector(
		(state: RootState) => state.fund
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAvailableFundsAction());
	}, []);
	return <div>Wrapper Spinnerloader Wrapper</div>;
};
