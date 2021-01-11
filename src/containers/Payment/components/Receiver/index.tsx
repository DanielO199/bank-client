import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Select } from 'antd';

import { fetchAllBillsAction } from 'actions/billActions';
import { inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

export const Receiver = () => {
	const { allBills, imBusy, imWithError } = useSelector(
		(state: RootState) => state.bill
	);

	const { receiver } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const { Option } = Select;

	const handleChange = (value) => {
		dispatch(inputChange('receiver', value));
	};

	useEffect(() => {
		dispatch(fetchAllBillsAction());
	}, []);

	return (
		<div>
			<Form.Item
				name="receiver"
				label="Receiver"
				rules={[
					{
						required: true
					}
				]}>
				<Select
					defaultValue={receiver}
					style={{ width: 120 }}
					onChange={handleChange}>
					{allBills.map((bill) => (
						<Option key={bill.accountNumber} value={bill.accountNumber}>
							{bill.accountNumber}
						</Option>
					))}
				</Select>
			</Form.Item>
		</div>
	);
};
