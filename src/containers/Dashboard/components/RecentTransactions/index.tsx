import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';

import { fetchTransactionsAction } from 'actions/transactionActions';

import { Spinner, CardItem } from 'common/components';
import { RootState } from 'stores';

const TransactionItem = ({ item }) => {
	return <CardItem>{item.money}</CardItem>;
};

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
			<Card type="inner" title="Bills">
				{transactions.map((item) => (
					<TransactionItem item={item} />
				))}
			</Card>
		</div>
	);
};
