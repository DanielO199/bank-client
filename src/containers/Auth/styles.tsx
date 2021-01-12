import styled from 'styled-components';
import { Form, Button } from 'antd';

export const Wrapper = styled.div`
	@media only screen and (max-width: 860px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	display: flex;
	width: 100vw;
`;

export const BackgroundImage = styled.img`
	@media only screen and (max-width: 860px) {
		display: none;
	}

	height: 100vh;
	width: 70%;
	background-position: center center;
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 30%;
	min-width: 250px;
	padding: 100px 0px;
	position: relative;
`;

export const StyledButton = styled(Button)`
	width: 100%;
	margin: 0.5rem 0;
`;

export const StyledForm = styled(Form)`
	width: 250px;
	margin-top: 2rem;
`;
