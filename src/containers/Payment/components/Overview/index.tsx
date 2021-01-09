import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import { fetchAllBillsAction } from 'actions/billActions';
import { setBill, inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

export const Overview = () => {
	const { receiver, bill, money } = useSelector(
		(state: RootState) => state.payment
	);
	const dispatch = useDispatch();

	return (
		<div>
			Receiver Value ={receiver}
			Sender bill ={bill}
			money ={money}
		</div>
	);
};
