import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import { fetchUserBillsAction } from 'actions/billActions';
import { Spinner } from 'common/components';
import { RootState } from 'stores';

export const Bills = () => {
	const { userBills, imBusy, imWithError } = useSelector(
		(state: RootState) => state.bill
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserBillsAction());
	}, []);

	console.log(userBills);
	if (imBusy) return <Spinner />;
	return (
		<div style={{ width: '50%' }}>
			<Card
				title="Bills"
				extra={
					<span>
						<PlusCircleOutlined />
						Create new bill
					</span>
				}
				style={{ width: '100%' }}>
				{userBills.map((item) => (
					<p>{item.accountNumber}</p>
				))}
			</Card>
		</div>
	);
};
