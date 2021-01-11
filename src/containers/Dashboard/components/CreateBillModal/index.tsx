import { Modal } from 'antd';

export const CreateBillModal = ({
	isModalOpen,
	handleCancel,
	handleSubmit
}) => {
	return (
		<Modal
			title="Create bill"
			visible={isModalOpen}
			onOk={handleSubmit}
			onCancel={handleCancel}>
			Creating new bill is free.
			<p>Are you sure you want to create a new bill?</p>
		</Modal>
	);
};
