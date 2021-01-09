import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import { Card, CardItem } from 'common/components';

import { fetchAllBillsAction } from 'actions/billActions';
import { inputChange } from 'actions/paymentActions';

import { OverviewWrapper, OverviewDetails } from './styles';
import { RootState } from 'stores';

const OverviewHeader = () => {
	return <p>Transaction overview</p>;
};

export const Overview = () => {
	const { receiver, bill, money, title } = useSelector(
		(state: RootState) => state.payment
	);
	const dispatch = useDispatch();

	return (
		<Card title="Transaction overview">
			{/* <OverviewHeader /> */}
			{/* <OverviewDetails> */}
			<CardItem>{receiver}</CardItem>
			<CardItem>{bill}</CardItem>
			<CardItem>{money}</CardItem>
			<CardItem>{title}</CardItem>
			{/* <div>
					<span>{receiver}</span>
				</div>
				<div>
					<span>{bill}</span>
				</div>
				<div>
					<span>{money}</span>
				</div>
				<div>
					<span>{title}</span>
				</div> */}
			{/* </OverviewDetails> */}
		</Card>
	);
};
