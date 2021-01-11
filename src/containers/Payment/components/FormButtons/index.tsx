import { Button } from 'antd';
import { useSelector } from 'react-redux';

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
		<div className="steps-action">
			{currentStep < steps.length - 1 && (
				<Button type="primary" onClick={next}>
					Next
				</Button>
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
				<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
					Previous
				</Button>
			)}
		</div>
	);
};
