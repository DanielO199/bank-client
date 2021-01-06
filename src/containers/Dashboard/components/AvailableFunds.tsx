import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBillsAction } from 'actions/billActions';
import { RootState } from 'stores';

export const AvailableFunds = () => {
	const funds = useSelector((state: RootState) => state.fund.availableFunds);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBillsAction());
	}, []);
	return <div></div>;
};
