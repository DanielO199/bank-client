import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSavingsAction } from 'actions/fundActions';
import { Spinner } from 'common/components';
import { RootState } from 'stores';
{
	/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */
}
export const Savings = () => {
	// const funds = useSelector((state: RootState) => state.fund.funds);
	const { savings, savingsData, imBusy, imWithError } = useSelector(
		(state: RootState) => state.fund
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSavingsAction());
	}, []);
	console.log(savings);
	if (imBusy) return <Spinner />;
	return <div>{savings}</div>;
};
