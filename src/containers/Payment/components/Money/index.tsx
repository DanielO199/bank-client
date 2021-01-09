import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Select, Input } from 'antd';

import { fetchUserBillsAction } from 'actions/billActions';
import { setBill, inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

// const OptionItem =({bill})=> {
//   return (<>
//   <Option value={bill} >Jack</Option>
//   </>
//   )
// }

export const Money = () => {
	const { money } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const { Option } = Select;

	const handleChange = (value) => {
		dispatch(inputChange('money', value));
	};

	return (
		<div>
			<Input
				value={money}
				onChange={(e) => handleChange(e.target.value)}
				placeholder="Input a number"
				maxLength={25}
			/>
		</div>
	);
};
