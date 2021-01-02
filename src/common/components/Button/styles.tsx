import styled from 'styled-components';

export const StyledButton = styled.button`
	display: block;

	text-align: center;
	font-size: 1rem;
	min-height: 60px;
	min-width: 80vw;
	position: relative;
	text-transform: uppercase;
	box-shadow: 0 3px 10px #00000016;
	cursor: ${({ disabled }) => disabled && 'not-allowed'};
	&:focus {
		outline: none;
	}
`;
/* background-color: ${({ disabled }) =>
		disabled ? primaryColorDisabled : primaryColor};
	border: solid ${primaryLightColor} 3px;
	border-radius: 9px;
	color: ${whiteColor}; */
