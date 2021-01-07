import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import { fetchUserBillsAction } from 'actions/billActions';
import { CreateBillModal } from 'containers/Dashboard/components';
import { Spinner } from 'common/components';
import { RootState } from 'stores';

export const Bills = () => {
	const [isModalOpen, setModalIsOpen] = useState(false);
	const { userBills, imBusy, imWithError } = useSelector(
		(state: RootState) => state.bill
	);
	const dispatch = useDispatch();

	const showModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);

	useEffect(() => {
		dispatch(fetchUserBillsAction());
	}, []);

	console.log(userBills);
	if (imBusy) return <Spinner />;
	return (
		<div style={{ width: '50%' }}>
			<CreateBillModal isModalOpen={isModalOpen} handleCancel={closeModal} />
			<Card
				title="Bills"
				extra={
					<span onClick={showModal}>
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
