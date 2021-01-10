import {
	Bills,
	AvailableFunds,
	Savings,
	RecentTransactions,
	Tip
} from './components';

import { Wrapper, Row } from './styles';

export const DashboardContainer = () => {
	return (
		<Wrapper>
			<Row>
				<AvailableFunds />
				<Savings />
				<Tip />
			</Row>
			<Row>
				<Bills />
				<RecentTransactions />
			</Row>
		</Wrapper>
	);
};
