import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Cell } from 'recharts';

import { fetchSavingsAction } from 'actions/fundActions';
import { Spinner } from 'common/components';
import { RootState } from 'stores';
import { Wrapper } from './styles';

export const Savings = () => {
	// const funds = useSelector((state: RootState) => state.fund.funds);
	const { savings, savingsData, imBusy, imWithError } = useSelector(
		(state: RootState) => state.fund
	);
	const dispatch = useDispatch();

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

	const data = [
		{ name: 'outgoing', money: 24 },
		{ name: 'incoming', money: 2 }
	];

	useEffect(() => {
		dispatch(fetchSavingsAction());
	}, []);
	console.log(savingsData);
	if (imBusy) return <Spinner />;
	return (
		<Wrapper>
			<div>80%</div>
			<PieChart margin={0} width={100} height={60}>
				<Pie
					dataKey="money"
					// isAnimationActive={false}
					data={savingsData}
					cx={60}
					cy={30}
					innerRadius={25}
					outerRadius={30}
					paddingAngle={0}
					fill="#82ca9d"
					margin={{
						top: 50,
						right: 30,
						left: 30
					}}>
					{savingsData.map((entry, index) => (
						<Cell fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</Wrapper>
	);
};
