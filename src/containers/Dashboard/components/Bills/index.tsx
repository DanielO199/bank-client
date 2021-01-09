import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';

import { fetchUserBillsAction, createNewBillAction } from 'actions/billActions';
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

	const creatorId = '5ff38276fd149e22c08c6f27';

	const handleSubmit = async () => {
		dispatch(createNewBillAction(creatorId));

		// const rawResponse = await fetch('http://localhost:5000/api/bills', {
		// 	method: 'POST',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({ creatorId: creatorId })
		// });
		// const content = await rawResponse.json();

		// console.log(content);
		// dispatch(fetchUserBillsAction());
		closeModal();
	};

	useEffect(() => {
		dispatch(fetchUserBillsAction());
	}, []);

	// if (imBusy) return <Spinner />;
	return (
		<div style={{ width: '50%' }}>
			<CreateBillModal
				isModalOpen={isModalOpen}
				handleCancel={closeModal}
				handleSubmit={handleSubmit}
			/>
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
