import styled from 'styled-components';
import { Layout } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import {
	borderColor,
	primaryColor,
	backgroundColorLayout
} from 'common/globals/theme';

export const StyledHeader = styled(Layout.Header)`
	background-color: ${backgroundColorLayout};
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	transition: color 0.3s;
	border-bottom: solid ${borderColor} 1px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.trigger {
		padding: 10px;
		cursor: pointer;
		border-radius: 50%;
		transition: 0.3s ease;
		&:hover {
			background-color: ${borderColor};
			transition: 0.3s ease;
		}
	}
`;

export const StyledLocation = styled.span`
	padding-left: 0.8rem;
`;

export const Logout = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	font-weight: 500;
	font-size: 16px;
	&:hover {
		cursor: pointer;
	}
	span {
		margin: 4px;
		font-size: 14px;
	}
`;

export const StyledLogoutIcon = styled(LogoutOutlined)`
	color: ${primaryColor};
`;

export const Wrapper = styled.div``;
