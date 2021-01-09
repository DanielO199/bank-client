import { St } from 'common/components';
import { Bill, Money, Receiver } from 'containers/Payment/components';

const steps = [
	{
		title: 'Bill',
		content: <Bill />
	},
	{
		title: 'Receiver',
		content: <Receiver />
	},
	{
		title: 'Second',
		content: <Money />
	},
	{
		title: 'Title',
		content: 'Last-content'
	},
	{
		title: 'Overview',
		content: 'Last-content'
	}
];

export const PaymentContainer = () => {
	return (
		<>
			<St steps={steps} />
		</>
	);
};
