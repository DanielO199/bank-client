import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from 'antd';

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
			<Form.Item
				name="title"
				label="Title"
				rules={[
					{
						required: true
					}
				]}>
				<Input
					value={title}
					onChange={(e) => handleChange(e.target.value)}
					placeholder="Type a title"
					maxLength={25}
				/>
			</Form.Item>
		</div>
	);
};
