import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from 'antd';

import { inputChange } from 'actions/stepActions';
import { RootState } from 'stores';
import { StepName } from 'containers/Payment/styles';

export const Title = () => {
	const { title } = useSelector((state: RootState) => state.step);
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
