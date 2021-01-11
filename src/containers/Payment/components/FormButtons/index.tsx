import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { StyledFormButtons, StyledButton } from './styles';

import { RootState } from 'stores';

export const FormButtons = ({
	currentStep,
	steps,
	next,
	prev,
	receiveAuthorizationKey
}) => {
	const { isReceived } = useSelector((state: RootState) => state.transaction);
	return (
		<StyledFormButtons>
			{currentStep < steps.length - 1 && (
				<StyledButton type="primary" onClick={next}>
					Next <RightOutlined />
				</StyledButton>
			)}
			{!isReceived && currentStep === steps.length - 1 && (
				<Button type="primary" onClick={receiveAuthorizationKey}>
					Receive authorization key
				</Button>
			)}
			{isReceived && (
				<Button type="primary" onClick={() => console.log('confirm')}>
					Confirm
				</Button>
			)}
			{isReceived && <input value={'123'} />}

			{!isReceived && currentStep > 0 && (
				<StyledButton type="default" onClick={() => prev()}>
					<LeftOutlined /> Previous
				</StyledButton>
			)}
		</StyledFormButtons>
	);
};
