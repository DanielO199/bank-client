import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from 'stores';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormWrapper, StyledButton, StyledForm } from 'containers/Auth/styles';
import { Form, Input } from 'antd';

import { Logo } from 'common/components';
export const RegisterForm = ({ toggleMode }) => {
	const dispatch = useDispatch();

	const onFinish = (values) => {
		console.log(values);
	};

	return (
		<FormWrapper>
			<Logo height="100px" border="none" />
			<StyledForm onFinish={onFinish}>
				<Form.Item
					name="firstName"
					rules={[
						{
							required: true,
							message: 'Please input your first name'
						}
					]}>
					<Input
						autoComplete="off"
						prefix={<UserOutlined />}
						placeholder="First name"
					/>
				</Form.Item>

				<Form.Item
					name="lastnName"
					rules={[
						{
							required: true,
							message: 'Please input your last name'
						}
					]}>
					<Input
						autoComplete="off"
						prefix={<UserOutlined />}
						placeholder="Last name"
					/>
				</Form.Item>

				<Form.Item
					name="email"
					rules={[
						{
							required: true,
							message: 'Please input your e-mail'
						}
					]}>
					<Input
						autoComplete="off"
						prefix={<UserOutlined />}
						placeholder="E-mail"
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
						Create account
					</StyledButton>
					<div style={{ textAlign: 'center' }}>Or</div>
					<StyledButton type="default" onClick={toggleMode}>
						Back to Log In
					</StyledButton>
				</Form.Item>
			</StyledForm>
		</FormWrapper>
	);
};

export default RegisterForm;
