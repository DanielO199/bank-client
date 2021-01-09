import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import { fetchAllBillsAction } from 'actions/billActions';
import { setBill, inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

// const OptionItem =({bill})=> {
//   return (<>
//   <Option value={bill} >Jack</Option>
//   </>
//   )
// }

export const Receiver = () => {
	const { allBills, imBusy, imWithError } = useSelector(
		(state: RootState) => state.bill
	);

	const { receiver } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const { Option } = Select;

	const handleChange = (value) => {
		// dispatch(setBill(value));
		dispatch(inputChange('receiver', value));
	};

	useEffect(() => {
		dispatch(fetchAllBillsAction());
	}, []);

	return (
		<div>
			selected Value ={receiver}
			<Select
				defaultValue={receiver}
				style={{ width: 120 }}
				onChange={handleChange}>
				{allBills.map((bill) => (
					<Option value={bill.accountNumber}>{bill.accountNumber}</Option>
				))}
			</Select>
		</div>
	);
};
