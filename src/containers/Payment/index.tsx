import { Form } from 'antd';

import { RootState } from 'stores';
import { nextStep, prevStep } from 'actions/paymentActions';

import { FormSteps } from 'common/components';
import {
	Bill,
	FormButtons,
	FormContent,
	Money,
	Overview,
	Receiver,
	Title
} from 'containers/Payment/components';
import { useDispatch, useSelector } from 'react-redux';

import { StyledForm, FormWrapper } from './styles';

import { receiveAuthorizationKeyAction } from 'actions/transactionActions';

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

export const PaymentContainer = () => {
	const dispatch = useDispatch();
	const userId = '5ff38276fd149e22c08c6f27';
	const receiveAuthorizationKey = () => {
		dispatch(receiveAuthorizationKeyAction(userId));
	};

	const { currentStep } = useSelector((state: RootState) => state.payment);

	const [form] = Form.useForm();

	const next = async () => {
		try {
			switch (currentStep) {
				case 0:
					await form.validateFields(['bill']);
					break;

				case 1:
					await form.validateFields(['receiver']);
					break;

				case 2:
					await form.validateFields(['money']);
					break;

				case 3:
					await form.validateFields(['title']);
					break;

				default:
					break;
			}

			dispatch(nextStep());
		} catch (error) {}
	};

	const prev = () => {
		dispatch(prevStep());
	};

	return (
		<>
			<FormSteps steps={steps} currentStep={currentStep} />

			<StyledForm>
				<FormWrapper>
					<FormContent form={form} steps={steps} currentStep={currentStep} />
					<FormButtons
						currentStep={currentStep}
						next={next}
						prev={prev}
						steps={steps}
						receiveAuthorizationKey={receiveAuthorizationKey}
					/>
				</FormWrapper>
			</StyledForm>
		</>
	);
};
