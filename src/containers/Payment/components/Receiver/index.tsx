import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';

import { fetchUserBillsAction, createNewBillAction } from 'actions/billActions';
import { CreateBillModal } from 'containers/Dashboard/components';
import { Spinner, Card, CardItem } from 'common/components';
import { RootState } from 'stores';

export const Receiver = () => {
	// const { allBills, imBusy, imWithError } = useSelector(
	// 	(state: RootState) => state.bill
	// );

	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(fetchUserBillsAction());
	}, []);

	return <div>Xd</div>;
};
