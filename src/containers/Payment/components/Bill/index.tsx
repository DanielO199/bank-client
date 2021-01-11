import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Select, Form, Input } from 'antd';

import { fetchUserBillsAction } from 'actions/billActions';
import { inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

// const OptionItem =({bill})=> {
//   return (<>
//   <Option value={bill} >Jack</Option>
//   </>
//   )
// }

export const Bill = () => {
	const { userBills, imBusy, imWithError } = useSelector(
		(state: RootState) => state.bill
	);

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
				<Input />
			</Form.Item>

			{/* <Select
				defaultValue={bill}
				style={{ width: 120 }}
				onChange={handleChange}>
				{userBills.map((bill) => (
					<Option value={bill.accountNumber}>{bill.accountNumber}</Option>
				))}
			</Select> */}
		</div>
	);
};
