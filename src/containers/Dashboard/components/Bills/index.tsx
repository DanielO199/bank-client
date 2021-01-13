import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';

import { fetchUserBillsAction, createNewBillAction } from 'actions/billActions';
import { CreateBillModal } from 'containers/Dashboard/components';
import { formatBill } from 'utils';
import { Spinner, Card, CardItem } from 'common/components';
import { RootState } from 'stores';
import { Wrapper, StyledSpan, StyledItem } from './styles';

const NewBillIcon = ({ showModal }) => {
	return (
		<StyledSpan onClick={showModal}>
			<PlusCircleOutlined />
			Create new bill
		</StyledSpan>
	);
};

const BillItem = ({ item }) => {
	return (
		<CardItem>
			<div>{formatBill(item.accountNumber)}</div>
			<StyledItem>{item.money} PLN</StyledItem>
		</CardItem>
	);
};

export const Bills = () => {
	const [isModalOpen, setModalIsOpen] = useState(false);
	const { userId } = useSelector((state: RootState) => state.auth);
	const { userBills, imBusy } = useSelector((state: RootState) => state.bill);
	const dispatch = useDispatch();

	const showModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);

	const handleSubmit = async () => {
		dispatch(createNewBillAction(userId));

		closeModal();
	};

	useEffect(() => {
		dispatch(fetchUserBillsAction());
	}, []);

	if (imBusy)
		return (
			<Wrapper justifyContent="center">
				<Spinner />
			</Wrapper>
		);
	return (
		<Wrapper>
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
		</Wrapper>
	);
};
