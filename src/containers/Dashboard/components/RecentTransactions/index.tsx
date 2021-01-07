import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';

import { fetchTransactionsAction } from 'actions/transactionActions';

import { Spinner } from 'common/components';
import { RootState } from 'stores';

export const RecentTransactions = () => {
	const { transactions, imBusy, imWithError } = useSelector(
		(state: RootState) => state.transaction
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTransactionsAction());
	}, []);
	console.log(transactions);
	if (imBusy) return <Spinner />;
	return (
		<div style={{ width: '50%' }}>
			<Card
				title="Recent transactions"
				headStyle={{ backgroundColor: 'red' }}
				style={{ width: '100%' }}>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
		</div>
	);
};
