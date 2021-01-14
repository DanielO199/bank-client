export const NEXT_STEP = 'NEXT_STEP';
export const PREVIOUS_STEP = 'PREVIOUS_STEP';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RESET = 'RESET';

export interface IStepStore {
	bill: string;
	receiver: string;
	money: string;
	title: string;
	currentStep: number;
}
