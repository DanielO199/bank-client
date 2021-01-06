import styled from 'styled-components';
import { Layout } from 'antd';

import { backgroundColor } from 'common/globals/theme';

export const StyledSidebar = styled(Layout.Sider)`
	height: 100vh;
	left: 0;
	transition: all 0.1s ease-in-out;
	box-shadow: rgba(17, 17, 17, 0.06) 4px 0px 8px -3px;
	background-color: ${backgroundColor};
`;

export const StyledLayout = styled(Layout)``;
