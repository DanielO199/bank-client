import { Button, Form } from 'antd';

import { RootState } from 'stores';
import { nextStep, prevStep } from 'actions/paymentActions';

import { St } from 'common/components';
import {
	Bill,
	Money,
	Overview,
	Receiver,
	Title
} from 'containers/Payment/components';
import { useDispatch, useSelector } from 'react-redux';

import { receiveAuthorizationKeyAction } from 'actions/transactionActions';

export const PaymentContainer = () => {
	const dispatch = useDispatch();
	const userId = '5ff38276fd149e22c08c6f27';
	const receiveAuthorizationKey = () => {
		dispatch(receiveAuthorizationKeyAction(userId));
	};

	const { currentStep } = useSelector((state: RootState) => state.payment);
	const { isReceived } = useSelector((state: RootState) => state.transaction);

	const [form] = Form.useForm();

	const next = async () => {
		let error;
		try {
			error = await form.validateFields(['bill']);
			dispatch(nextStep());
		} catch (error) {
			console.log(error);
		}
	};

	const prev = () => {
		dispatch(prevStep());
	};

	const steps = [
		{
			title: 'Bill',
			content: <Bill />
		},
		{
			title: 'Receiver',
			content: <Receiver />
		},
		{
			title: 'Money',
			content: <Money />
		},
		{
			title: 'Title',
			content: <Title />
		},
		{
			title: 'Overview',
			content: <Overview />
		}
	];

	return (
		<div>
			<St steps={steps} />

			<div style={{ backgroundColor: 'greenyellow', padding: '15px' }}>
				<div
					style={{
						margin: 'auto',
						maxWidth: '300px'
					}}>
					{/* Remove to other file */}
					<Form form={form} onFinish={() => console.log('OK')}>
						<div className="steps-content" style={{ marginBottom: '10px' }}>
							{steps[currentStep].content}
						</div>
					</Form>
					{/* Remove to other file */}
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
				</div>
			</div>
		</div>
	);
};
