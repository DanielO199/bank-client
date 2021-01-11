import styled from 'styled-components';
import { borderColor, primaryColor } from 'common/globals/theme';

interface Props {
	justifyContent?: string;
}

export const Wrapper = styled.div`
	display: flex;
	justify-content: ${({ justifyContent = 'space-between' }: Props) =>
		justifyContent};
	flex-grow: 3;
	min-width: 250px;
	min-height: 280px;
	-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
	margin-right: 8px;
	margin-top: 10px;
`;

export const StyledSpan = styled.span`
	color: ${primaryColor};
	padding: 10px;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s ease;
	&:hover {
		background-color: ${borderColor};
		transition: 0.3s ease;
	}
	svg {
		margin-right: 0.3rem;
		font-size: 18px;
	}
`;

export const StyledItem = styled.div`
	font-weight: 500;
`;
