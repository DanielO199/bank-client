import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Steps, Button, message } from 'antd';

import { RootState } from 'stores';
import { nextStep, prevStep } from 'actions/paymentActions';

const { Step } = Steps;

export const St = ({ steps, onSubmit }) => {
	const { currentStep } = useSelector((state: RootState) => state.payment);

	const { isReceived } = useSelector((state: RootState) => state.transaction);

	const dispatch = useDispatch();

	const next = () => {
		dispatch(nextStep());
	};

	const prev = () => {
		dispatch(prevStep());
	};
	// #f2f4f7
	return (
		<>
			<Steps current={currentStep} responsive={true}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div style={{ backgroundColor: 'greenyellow', padding: '15px' }}>
				<div
					style={{
						margin: 'auto',
						maxWidth: '300px'
					}}>
					<div className="steps-content" style={{ marginBottom: '10px' }}>
						{steps[currentStep].content}
					</div>
					<div className="steps-action">
						{currentStep < steps.length - 1 && (
							<Button type="primary" onClick={next}>
								Next
							</Button>
						)}
						{!isReceived && currentStep === steps.length - 1 && (
							<Button type="primary" onClick={onSubmit}>
								Receive authorization key
							</Button>
						)}
						{isReceived && (
							<Button type="primary" onClick={onSubmit}>
								Receive authorization key
							</Button>
						)}
						{isReceived && <input value={'123'} />}

						{!isReceived && currentStep > 0 && (
							<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
								Previous
							</Button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
