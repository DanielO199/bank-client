import { St } from 'common/components';
import {
	Bill,
	Money,
	Overview,
	Receiver,
	Title
} from 'containers/Payment/components';
import { useDispatch } from 'react-redux';

import { receiveAuthorizationKeyAction } from 'actions/transactionActions';

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
		title: 'Money',
		content: <Money />
	},
	{
		title: 'Title',
		content: <Title />
	},
	{
		title: 'Overview',
		content: <Overview />
	}
];

export const PaymentContainer = () => {
	const dispatch = useDispatch();
	const userId = '5ff38276fd149e22c08c6f27';
	const receiveAuthorizationKey = () => {
		dispatch(receiveAuthorizationKeyAction(userId));
	};

	return (
		<div>
			<St steps={steps} onSubmit={receiveAuthorizationKey} />
		</div>
	);
};
