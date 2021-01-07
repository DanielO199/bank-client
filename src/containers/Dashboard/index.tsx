import {
	Bills,
	AvailableFunds,
	Savings,
	RecentTransations
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
				<RecentTransations />
			</Row>
		</Wrapper>
	);
};
