import { Form } from 'antd';

export const FormContent = ({ form, steps, currentStep }) => {
	return (
		<Form form={form} onFinish={() => console.log('OK')}>
			<div className="steps-content" style={{ marginBottom: '10px' }}>
				{steps[currentStep].content}
			</div>
		</Form>
	);
};
