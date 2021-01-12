import { useState } from 'react';

import { LoginForm, RegisterForm } from 'containers/Auth/components';
import { Wrapper, BackgroundImage } from './styles';
import background from 'assets/background.jpg';

const FormContainer = ({ isLoginMode, toggleMode }) => {
	if (isLoginMode) return <LoginForm toggleMode={toggleMode} />;
	return <RegisterForm toggleMode={toggleMode} />;
};

export const AuthContainer = () => {
	const [isLoginMode, setIsLoginMode] = useState(true);

	const toggleMode = () => setIsLoginMode(!isLoginMode);

	return (
		<Wrapper>
			<FormContainer toggleMode={toggleMode} isLoginMode={isLoginMode} />
			<BackgroundImage src={background} />
		</Wrapper>
	);
};
