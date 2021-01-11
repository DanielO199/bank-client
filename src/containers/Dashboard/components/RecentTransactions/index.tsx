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
				<div>{item.receiverName}</div>
			</div>
			<StyledColumn>
				<StyledName>{item.createdAt.slice(0, 10)}</StyledName>
				{item.money} PLN
			</StyledColumn>
		</CardItem>
	);
};

export const RecentTransactions = () => {
	const { transactions, imBusy, imWithError } = useSelector(
		(state: RootState) => state.transaction
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTransactionsAction());
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
