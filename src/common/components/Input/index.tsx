import React, { useReducer, useEffect } from 'react';

import { inputReducer } from './logic';
import { grayColor } from 'common/globals/theme';

import {
	FormInput,
	StyledLabel,
	StyledInput,
	StyledTextArea,
	StyledErrorText
} from './styles';

export const Input = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.initialValue || '',
		isTouched: false,
		isValid: props.initialValid || false
	});

	const { id, onInput } = props;
	const { value, isValid } = inputState;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	const changeHandler = (event) => {
		dispatch({
			type: 'CHANGE',
			val: event.target.value,
			validators: props.validators
		});
	};

	const touchHandler = () => {
		dispatch({
			type: 'TOUCH'
		});
	};

	let isInputInvalid = !inputState.isValid && inputState.isTouched;
	let borderColor = isInputInvalid ? '#eb4034' : `${grayColor}`;
	// borderColor={borderColor}
	const element =
		props.element === 'input' ? (
			<StyledInput
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
				autoComplete="off"
			/>
		) : (
			<StyledTextArea
				id={props.id}
				rows={props.rows || 3}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
			/>
		);

	return (
		<FormInput>
			<StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
			{element}
			{!inputState.isValid && inputState.isTouched && (
				<StyledErrorText>{props.errorText}</StyledErrorText>
			)}
		</FormInput>
	);
};
