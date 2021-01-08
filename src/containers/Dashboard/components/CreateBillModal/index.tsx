import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Select } from 'antd';

import { createNewBillAction } from 'actions/billActions';

export const CreateBillModal = ({ isModalOpen, handleCancel }) => {
	const { Option } = Select;
	const [selectedValue, setSelectedValue] = useState();
	const dispatch = useDispatch();

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

		handleCancel();
	};

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
