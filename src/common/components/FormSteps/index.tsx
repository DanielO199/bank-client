import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

export const FormSteps = ({ steps, currentStep }) => {
	return (
		<>
			<Steps current={currentStep} responsive={true}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
		</>
	);
};
