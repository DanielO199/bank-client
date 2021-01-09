import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Steps, Button, message } from 'antd';

import { RootState } from 'stores';
import { nextStep, prevStep } from 'actions/paymentActions';

const { Step } = Steps;

export const St = ({ steps }) => {
	const { currentStep } = useSelector((state: RootState) => state.payment);
	const dispatch = useDispatch();

	const next = () => {
		dispatch(nextStep());
	};

	const prev = () => {
		dispatch(prevStep());
	};

	return (
		<>
			<Steps current={currentStep} responsive={true}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className="steps-content">{steps[currentStep].content}</div>
			<div className="steps-action">
				{currentStep < steps.length - 1 && (
					<Button type="primary" onClick={next}>
						Next
					</Button>
				)}
				{currentStep === steps.length - 1 && (
					<Button
						type="primary"
						onClick={() => message.success('Processing complete!')}>
						Done
					</Button>
				)}
				{currentStep > 0 && (
					<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
						Previous
					</Button>
				)}
			</div>
		</>
	);
};
