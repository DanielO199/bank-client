import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Select } from 'antd';

import { createNewBillAction, fetchUserBillsAction } from 'actions/billActions';

export const CreateBillModal = ({
	isModalOpen,
	handleCancel,
	handleSubmit
}) => {
	const { Option } = Select;
	const [selectedValue, setSelectedValue] = useState();
	const dispatch = useDispatch();

	const handleChange = (value) => {
		setSelectedValue(value);
	};

	return (
		<Modal
			title="Basic Modal"
			visible={isModalOpen}
			onOk={handleSubmit}
			onCancel={handleCancel}>
			<Select
				defaultValue="lucy"
				style={{ width: 120 }}
				onChange={handleChange}>
				<Option value="jack">Jack</Option>
				<Option value="lucy">Lucy</Option>

				<Option value="Yiminghe">yiminghe</Option>
			</Select>
		</Modal>
	);
};
