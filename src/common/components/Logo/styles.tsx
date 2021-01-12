import styled from 'styled-components';

import { borderColor } from 'common/globals/theme';

interface Props {
	height?: string;
	border?: string;
}

export const StyledLogo = styled.div`
	border-bottom: ${({ border = ` solid ${borderColor} 1px;` }: Props) =>
		border};
	height: ${({ height = '64px' }: Props) => height};
	line-height: 64px;
	text-align: center;
`;
