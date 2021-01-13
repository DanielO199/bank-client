import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import { Form } from 'antd';

import { StyledSelect } from 'common/components';
import { StepName } from 'containers/Payment/styles';
import { fetchAllBillsAction } from 'actions/billActions';
import { inputChange } from 'actions/stepActions';
import { RootState } from 'stores';

export const Receiver = () => {
	const { allBills } = useSelector((state: RootState) => state.bill);

	const { receiver } = useSelector((state: RootState) => state.step);
	const dispatch = useDispatch();

	const handleSearch = (value) => {
		if (value) {
			dispatch(fetchAllBillsAction());
		}
	};

	const debouncedOnSearch = useCallback(debounce(handleSearch, 500), []);

	const handleChange = (value) => {
		dispatch(inputChange('receiver', value));
	};

	const options = allBills.map((item) => (
		<StyledSelect.Option value={item.accountNumber} key={item.accountNumber}>
			{item.accountNumber}
		</StyledSelect.Option>
	));
	return (
		<div>
			<StepName>Receiver</StepName>
			<Form.Item
				name="receiver"
				rules={[
					{
						required: true,
						message: 'This field is required'
					}
				]}>
				<StyledSelect
					showSearch
					value={receiver}
					placeholder="Type to search"
					defaultActiveFirstOption={false}
					showArrow={false}
					filterOption={false}
					onSearch={debouncedOnSearch}
					onChange={handleChange}
					notFoundContent={<div>No bill found</div>}>
					{options}
				</StyledSelect>
			</Form.Item>
		</div>
	);
};
