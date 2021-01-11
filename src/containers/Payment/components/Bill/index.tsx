import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Select, Form, Input } from 'antd';

import { fetchUserBillsAction } from 'actions/billActions';
import { inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

export const Bill = () => {
	const { userBills } = useSelector((state: RootState) => state.bill);

	const { bill } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const { Option } = Select;

	const handleChange = (value) => {
		dispatch(inputChange('bill', value));
	};

	useEffect(() => {
		dispatch(fetchUserBillsAction());
	}, []);

	return (
		<div>
			<Form.Item
				name="bill"
				label="Bill"
				rules={[
					{
						required: true
					}
				]}>
				<Select
					defaultValue={bill}
					style={{ width: 120 }}
					onChange={handleChange}>
					{userBills.map((bill) => (
						<Option key={bill.accountNumber} value={bill.accountNumber}>
							{bill.accountNumber}
						</Option>
					))}
				</Select>
			</Form.Item>
		</div>
	);
};
