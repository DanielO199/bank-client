import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie } from 'recharts';

import { fetchSavingsAction } from 'actions/fundActions';
import { Spinner } from 'common/components';
import { RootState } from 'stores';

export const Savings = () => {
	// const funds = useSelector((state: RootState) => state.fund.funds);
	const { savings, savingsData, imBusy, imWithError } = useSelector(
		(state: RootState) => state.fund
	);
	const dispatch = useDispatch();

	const data = [
		{ name: 'outgoing', money: 24 },
		{ name: 'incoming', money: 0 }
	];

	useEffect(() => {
		dispatch(fetchSavingsAction());
	}, []);
	console.log(savingsData);
	if (imBusy) return <Spinner />;
	return (
		<div>
			{/* {savings} */} XD
			<PieChart width={200} height={80}>
				<Pie
					dataKey="money"
					// isAnimationActive={false}
					data={data}
					cx={200}
					cy={80}
					innerRadius={60}
					outerRadius={80}
					fill="#82ca9d"
				/>
			</PieChart>
		</div>
	);
};
