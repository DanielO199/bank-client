import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

import { StyledInput, Wrapper } from './styles';

import { StepName } from 'containers/Payment/styles';
import { inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

export const Money = () => {
	const { money } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const handleChange = (value) => {
		dispatch(inputChange('money', value));
	};

	return (
		<Wrapper>
			<StepName>Money</StepName>
			<Form.Item
				name="money"
				rules={[
					{
						required: true
					}
				]}>
				<StyledInput
					value={money}
					onChange={(e) => handleChange(e.target.value)}
					placeholder="Input a number"
					maxLength={25}
					type="number"
				/>
			</Form.Item>
		</Wrapper>
	);
};
