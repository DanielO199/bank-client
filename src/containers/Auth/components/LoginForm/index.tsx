import { useDispatch } from 'react-redux';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Logo } from 'common/components';
import { loginAction } from 'actions/authActions';
import { FormWrapper, StyledButton, StyledForm } from 'containers/Auth/styles';

export const LoginForm = ({ toggleMode }) => {
	const dispatch = useDispatch();

	const onFinish = (values) => {
		dispatch(loginAction(values));
	};

	return (
		<FormWrapper>
			<Logo height="100px" border="none" />
			<StyledForm onFinish={onFinish}>
				<Form.Item
					name="pin"
					rules={[
						{
							required: true,
							message: 'Please input your pin'
						}
					]}>
					<Input
						autoComplete="off"
						prefix={<UserOutlined />}
						placeholder="Pin"
					/>
				</Form.Item>

				<Form.Item
					name="password"
					rules={[
						{
							min: 5,
							required: true,
							message: 'Please input your password'
						}
					]}>
					<Input
						autoComplete="off"
						prefix={<LockOutlined />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>

				<Form.Item>
					<StyledButton type="primary" htmlType="submit">
						Log In
					</StyledButton>
					<div style={{ textAlign: 'center' }}>Or</div>
					<StyledButton type="default" onClick={toggleMode}>
						Create account
					</StyledButton>
				</Form.Item>
			</StyledForm>
		</FormWrapper>
	);
};

export default LoginForm;
