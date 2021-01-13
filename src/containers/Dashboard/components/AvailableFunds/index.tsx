import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableFundsAction } from 'actions/fundActions';
import { Spinner } from 'common/components';
import { RootState } from 'stores';
import { Wrapper } from './styles';
import { LineChart, Line } from 'recharts';
import { primaryColor } from 'common/globals/theme';

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
