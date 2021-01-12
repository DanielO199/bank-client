import React from 'react';
import { Steps } from 'antd';

import { StyledFormSteps } from './styles';

const { Step } = Steps;

export const FormSteps = ({ steps, currentStep }) => {
	return (
		<>
			<StyledFormSteps current={currentStep} responsive>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</StyledFormSteps>
		</>
	);
};
