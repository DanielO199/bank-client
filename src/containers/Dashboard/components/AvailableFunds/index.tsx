import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LineChart, Line } from 'recharts';

import { RootState } from 'stores';
import { fetchAvailableFundsAction } from 'actions/fundActions';
import { Spinner } from 'common/components';
import { primaryColor } from 'common/globals/theme';
import { Wrapper } from './styles';

export const AvailableFunds = () => {
	const { funds, fundsData, imBusy } = useSelector(
		(state: RootState) => state.fund
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAvailableFundsAction());
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
				<p>Available Funds</p>
				<h2>{funds} PLN</h2>
			</div>
			<LineChart margin={{ top: 30 }} width={120} height={100} data={fundsData}>
				<Line
					type="monotone"
					dataKey="money"
					stroke={primaryColor}
					strokeWidth={1}
					dot={false}
				/>
			</LineChart>
		</Wrapper>
	);
};
