import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTransactionsAction } from 'actions/transactionActions';

import { Table } from 'common/components';

import { RootState } from 'stores';

export const HistoryList = () => {
	const { transactions, imBusy, imWithError } = useSelector(
		(state: RootState) => state.transaction
	);
	const dispatch = useDispatch();

	const columns = [
		{
			title: 'Sender',
			dataIndex: 'senderName',
			key: ['senderName', 'senderAccountNumber'],
			render: (text, text2) => (
				<>
					<div>{text}</div>
					<div>{text2.senderAccountNumber}</div>
				</>
			)
		},
		{
			title: 'Receiver',
			dataIndex: 'receiverName',
			key: 'receiverName'
		},
		{
			title: 'Money',
			dataIndex: 'money',
			key: 'money'
		},
		{
			title: 'Title',
			key: 'title',
			dataIndex: 'title'
		},
		{
			title: 'Date',
			key: 'createdAt',
			dataIndex: 'createdAt'
		}
	];

	useEffect(() => {
		dispatch(fetchTransactionsAction());
	}, []);
	return (
		<Table
			columns={columns}
			rowKey={(record) => record._id}
			data={transactions}
			loading={imBusy}
		/>
	);
};
