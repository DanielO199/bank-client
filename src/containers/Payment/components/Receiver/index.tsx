import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from 'antd';

import { StyledSelect } from 'common/components';
import { StepName } from 'containers/Payment/styles';
import { fetchAllBillsAction } from 'actions/billActions';
import { inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

export const Receiver = () => {
	const { allBills, imBusy, imWithError } = useSelector(
		(state: RootState) => state.bill
	);

	const { receiver } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const handleChange = (value) => {
		dispatch(inputChange('receiver', value));
	};

	useEffect(() => {
		dispatch(fetchAllBillsAction());
	}, []);

	return (
		<div>
			<StepName>Receiver</StepName>
			<Form.Item
				name="receiver"
				rules={[
					{
						required: true
					}
				]}>
				<StyledSelect defaultValue={receiver} onChange={handleChange}>
					{allBills.map((bill) => (
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
