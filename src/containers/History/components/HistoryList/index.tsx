import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'stores';
import { fetchTransactionsAction } from 'actions/transactionActions';
import { Table } from 'common/components';
import { columns } from './columns';

export const HistoryList = () => {
	const { transactions, pagination, imBusy } = useSelector(
		(state: RootState) => state.transaction
	);
	const dispatch = useDispatch();

	const initialPagination = {
		current: 1,
		pageSize: 5
	};

	useEffect(() => {
		dispatch(fetchTransactionsAction(initialPagination));
	}, []);

	const handleTableChange = async (pagination) => {
		dispatch(fetchTransactionsAction(pagination));
	};

	return (
		<>
			<Table
				columns={columns}
				rowKey={(record) => record._id}
				data={transactions}
				loading={imBusy}
				onChange={handleTableChange}
				pagination={pagination}
			/>
		</>
	);
};
