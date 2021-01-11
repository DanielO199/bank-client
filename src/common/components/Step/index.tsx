import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Steps, Button } from 'antd';

import { RootState } from 'stores';

const { Step } = Steps;

export const St = ({ steps }) => {
	const { currentStep } = useSelector((state: RootState) => state.payment);

	const dispatch = useDispatch();

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
