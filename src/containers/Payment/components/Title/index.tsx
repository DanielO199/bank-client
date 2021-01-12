import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from 'antd';

import { StepName } from 'containers/Payment/styles';
import { inputChange } from 'actions/paymentActions';
import { RootState } from 'stores';

export const Title = () => {
	const { title } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const handleChange = (value) => {
		dispatch(inputChange('title', value));
	};

	return (
		<div>
			<StepName>Title</StepName>
			<Form.Item
				name="title"
				rules={[
					{
						required: true,
						message: 'This field is required'
					}
				]}>
				<Input
					autoComplete="off"
					value={title}
					onChange={(e) => handleChange(e.target.value)}
					placeholder="Type a title"
					maxLength={25}
				/>
			</Form.Item>
		</div>
	);
};
