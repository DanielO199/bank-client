import styled from 'styled-components';

import { grayColor } from 'common/globals/theme';

const FormInput = styled.div`
	margin: 1.7rem 0;
	position: relative;
`;

const StyledLabel = styled.label`
	margin-bottom: 0.5rem;
	display: block;
	font-weight: 300;
	color: ${grayColor};
	font-size: 0.95rem;
	font-weight: bold;
`;

const StyledInput = styled.input`
	padding: 0.5em 1rem;
	margin: 0.5em 0;
	width: 100%;
	background: #ffffff;
	border: 1px solid ${grayColor};
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	&:focus,
	&:active {
		text-decoration: none;
		outline: none;
	}
`;

const StyledTextArea = styled.textarea`
	width: 100%;
	border: 1px solid #ccc;
	background: white;
	border-radius: 5px;

	&:focus {
		outline: none;
		border-color: green;
	}
`;

// border-color: ${({ borderColor }) => borderColor};

const StyledSelect = styled.select`
	padding: 0.8rem;
	margin: 0.5em 0;
	width: 100%;
	background: #ffffff;
	border: 1px solid ${grayColor};

	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	&:focus,
	&:active {
		text-decoration: none;
		outline: none;
	}
`;

// border-color: ${({ borderColor = grayColor }) => borderColor};

const StyledErrorText = styled.p`
	color: red;
	position: absolute;
	bottom: -40px;
`;

export {
	FormInput,
	StyledLabel,
	StyledInput,
	StyledTextArea,
	StyledSelect,
	StyledErrorText
};
