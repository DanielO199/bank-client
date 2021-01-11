import styled from 'styled-components';
import { Input } from 'antd';

export const Wrapper = styled.div`
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
`;

export const StyledInput = styled(Input)``;
