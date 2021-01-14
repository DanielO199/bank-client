import { useSelector } from 'react-redux';

import { RootState } from 'stores';
import { Card, CardItem } from 'common/components';

export const Overview = () => {
	const { receiver, bill, money, title } = useSelector(
		(state: RootState) => state.step
	);

	return (
		<Card style={{ textAlign: 'center' }} title="Transaction overview">
			<CardItem>{receiver}</CardItem>
			<CardItem>{bill}</CardItem>
			<CardItem>{money}</CardItem>
			<CardItem>{title}</CardItem>
		</Card>
	);
};
