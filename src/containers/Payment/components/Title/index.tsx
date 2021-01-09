import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Select, Input } from 'antd';

import { fetchUserBillsAction } from 'actions/billActions';
import { inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

// const OptionItem =({bill})=> {
//   return (<>
//   <Option value={bill} >Jack</Option>
//   </>
//   )
// }

export const Title = () => {
	const { title } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const handleChange = (value) => {
		dispatch(inputChange('title', value));
	};

	return (
		<div>
			<Input
				value={title}
				onChange={(e) => handleChange(e.target.value)}
				placeholder="Input a number"
				maxLength={25}
			/>
		</div>
	);
};
