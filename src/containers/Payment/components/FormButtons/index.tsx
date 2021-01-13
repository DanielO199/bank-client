import { useSelector } from 'react-redux';
import { Input } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { StyledFormButtons, StyledButton } from './styles';

import { RootState } from 'stores';
import { useState } from 'react';

export const FormButtons = ({
	currentStep,
	steps,
	next,
	prev,
	receiveAuthorizationKey,
	confirmTransaction
}) => {
	const [receivedKey, setReceivedKey] = useState();
	const { isReceived, imBusy } = useSelector(
		(state: RootState) => state.transaction
	);

	const handleChange = (value) => {
		setReceivedKey(value);
	};

	return (
		<StyledFormButtons>
			{currentStep < steps.length - 1 && (
				<StyledButton type="primary" onClick={next}>
					Next <RightOutlined />
				</StyledButton>
			)}
			{!isReceived && currentStep === steps.length - 1 && (
				<StyledButton type="primary" onClick={receiveAuthorizationKey}>
					Receive authorization key
				</StyledButton>
			)}

			{isReceived && (
				<Input
					style={{ marginBottom: '1rem' }}
					autoComplete="off"
					value={receivedKey}
					onChange={(e) => handleChange(e.target.value)}
					placeholder="Input authorization key"
				/>
			)}

			{isReceived && (
				<StyledButton
					type="primary"
					disabled={imBusy}
					onClick={() => confirmTransaction(receivedKey)}>
					Confirm
				</StyledButton>
			)}

			{!isReceived && currentStep > 0 && (
				<StyledButton type="default" onClick={() => prev()}>
					<LeftOutlined /> Previous
				</StyledButton>
			)}
		</StyledFormButtons>
	);
};
