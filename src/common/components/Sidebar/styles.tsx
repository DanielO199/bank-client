import styled from 'styled-components';
import { Layout } from 'antd';

import { borderColor, backgroundColor } from 'common/globals/theme';

export const StyledSidebar = styled(Layout.Sider)`
	height: 100vh;
	left: 0;
	transition: all 0.1s ease-in-out;
	background-color: white;
	border-right: solid ${borderColor} 1px;

	.ant-menu-inline {
		border: none;
	}

	.ant-menu-item {
		font-weight: 500;
		margin: 0;
		padding: 0;
		padding-left: 0px;
	}
`;

export const StyledLayout = styled(Layout)`
	background-color: ${backgroundColor};
`;
