import {
	Bills,
	AvailableFunds,
	Savings,
	RecentTransactions
} from './components';

import { Wrapper, Row } from './styles';

export const DashboardContainer = () => {
	return (
		<Wrapper>
			<Row>
				<AvailableFunds />
				<Savings />
			</Row>
			<Row>
				<Bills />
				<RecentTransactions />
			</Row>
		</Wrapper>
	);
};
