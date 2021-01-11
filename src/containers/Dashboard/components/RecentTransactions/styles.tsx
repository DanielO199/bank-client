import styled from 'styled-components';

import { primaryColor, borderColor } from 'common/globals/theme';

interface Props {
	justifyContent?: string;
}

export const Wrapper = styled.div`
	display: flex;
	justify-content: ${({ justifyContent = 'space-between' }: Props) =>
		justifyContent};
	flex-grow: 2;
	min-width: 250px;
	border: solid ${borderColor} 1px;
	margin-right: 8px;
	margin-top: 10px;
`;

export const StyledName = styled.div`
	color: ${primaryColor};
`;

export const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;
