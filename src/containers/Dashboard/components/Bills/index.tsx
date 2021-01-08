import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';

import { fetchUserBillsAction } from 'actions/billActions';
import { CreateBillModal } from 'containers/Dashboard/components';
import { Spinner, Card, CardItem } from 'common/components';
import { RootState } from 'stores';

const NewBillIcon = ({ showModal }) => {
	return (
		<span onClick={showModal}>
			<PlusCircleOutlined />
			Create new bill
		</span>
	);
};

const BillItem = ({ item }) => {
	return <CardItem>{item.accountNumber}</CardItem>;
};

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

	if (imBusy) return <Spinner />;
	return (
		<div style={{ width: '50%' }}>
			<CreateBillModal isModalOpen={isModalOpen} handleCancel={closeModal} />
			<Card
				type="inner"
				title="Bills"
				extra={<NewBillIcon showModal={showModal} />}>
				{userBills.map((item) => (
					<BillItem item={item} />
				))}
			</Card>
		</div>
	);
};
