import { useDispatch, useSelector } from 'react-redux';
import { Input, Form } from 'antd';

import { RootState } from 'stores';
import { StepName } from 'containers/Payment/styles';
import { inputChange } from 'actions/stepActions';

import { Wrapper } from './styles';

export const Money = () => {
	const { money } = useSelector((state: RootState) => state.step);
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
						required: true,
						message: 'This field is required'
					}
				]}>
				<Input
					autoComplete="off"
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
