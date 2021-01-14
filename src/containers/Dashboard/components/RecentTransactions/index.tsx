import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTransactionsAction } from 'actions/transactionActions';

import { Spinner, CardItem, Card } from 'common/components';
import { RootState } from 'stores';
import { Wrapper, StyledName, StyledColumn } from './styles';

const TransactionItem = ({ item }) => {
	return (
		<CardItem>
			<div>
				{item.title}
				<StyledName>{item.senderName}</StyledName>
			</div>
			<StyledColumn>
				<div>{item.createdAt.slice(0, 10)}</div>
				{item.money} PLN
			</StyledColumn>
		</CardItem>
	);
};

export const RecentTransactions = () => {
	const { transactions, imBusy } = useSelector(
		(state: RootState) => state.transaction
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTransactionsAction({ pageSize: 3 }));
	}, []);

	if (imBusy)
		return (
			<Wrapper justifyContent="center">
				<Spinner />
			</Wrapper>
		);

	return (
		<Wrapper>
			<Card title="Recent transactions">
				{transactions.map((item) => (
					<TransactionItem item={item} />
				))}
			</Card>
		</Wrapper>
	);
};
