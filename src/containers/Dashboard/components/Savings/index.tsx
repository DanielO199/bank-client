import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Cell } from 'recharts';

import { RootState } from 'stores';
import { fetchSavingsAction } from 'actions/fundActions';
import { Spinner } from 'common/components';
import { primaryColor } from 'common/globals/theme';
import { Wrapper } from './styles';

export const Savings = () => {
	const { savings, savingsData, imBusy } = useSelector(
		(state: RootState) => state.fund
	);
	const dispatch = useDispatch();

	const COLORS = ['#c40000', `${primaryColor}`];

	useEffect(() => {
		dispatch(fetchSavingsAction());
	}, []);

	if (imBusy)
		return (
			<Wrapper justifyContent="center">
				<Spinner />
			</Wrapper>
		);
	return (
		<Wrapper>
			<div>
				<p>Savings</p>
				<h2>{Math.round(savings)}%</h2>
			</div>
			<PieChart margin={0} width={100} height={60}>
				<Pie
					dataKey="money"
					data={savingsData}
					cx={60}
					cy={30}
					innerRadius={27}
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
