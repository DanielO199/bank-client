import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';

import { StyledSelect } from 'common/components';
import { fetchUserBillsAction } from 'actions/billActions';
import { inputChange } from 'actions/stepActions';
import { StepName } from 'containers/Payment/styles';
import { RootState } from 'stores';

export const Bill = () => {
	const { userBills } = useSelector((state: RootState) => state.bill);

	const { bill } = useSelector((state: RootState) => state.step);
	const dispatch = useDispatch();

	// const { Option } = Select;

	const handleChange = (value) => {
		dispatch(inputChange('bill', value));
	};

	useEffect(() => {
		dispatch(fetchUserBillsAction());
	}, []);

	return (
		<div>
			<StepName>Bill</StepName>
			<Form.Item
				name="bill"
				rules={[
					{
						required: true,
						message: 'This field is required'
					}
				]}>
				<StyledSelect defaultValue={bill} onChange={handleChange}>
					{userBills.map((bill) => (
						<StyledSelect.Option
							key={bill.accountNumber}
							value={bill.accountNumber}>
							{bill.accountNumber}
						</StyledSelect.Option>
					))}
				</StyledSelect>
			</Form.Item>
		</div>
	);
};
