import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'antd';

import { RootState } from 'stores';
import { nextStep, prevStep } from 'actions/stepActions';
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
import {
	receiveAuthorizationKeyAction,
	createNewTransactionAction
} from 'actions/transactionActions';

import { StyledForm, FormWrapper } from './styles';

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
	const history = useHistory();
	const { currentStep, bill, receiver, money, title } = useSelector(
		(state: RootState) => state.step
	);
	const [form] = Form.useForm();

	const navigateToDashboard = () => {
		history.push('/dashboard');
	};

	const receiveAuthorizationKey = () => {
		dispatch(
			receiveAuthorizationKeyAction({
				senderAccountNumber: bill,
				receiverAccountNumber: receiver,
				money
			})
		);
	};

	const confirmTransaction = (receivedKey) => {
		dispatch(
			createNewTransactionAction(
				{
					senderAccountNumber: bill,
					receiverAccountNumber: receiver,
					authorizationKey: receivedKey,
					title,
					money
				},
				navigateToDashboard
			)
		);
	};

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
						confirmTransaction={confirmTransaction}
					/>
				</FormWrapper>
			</StyledForm>
		</>
	);
};
