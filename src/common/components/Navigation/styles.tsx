import styled from 'styled-components';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { backgroundColor } from 'common/globals/theme';

export const StyledMenuItem = styled(Menu.Item)`
	margin: 0;
	display: flex;
	align-items: center;
	height: 45px;
	.anticon {
		font-size: 19px;
		margin: 0 20px 0 10px;
	}
	a {
		/* color: red; */
		&.active {
			pointer-events: none;
			user-select: none;
		}
	}
`;

export const StyledMenu = styled(Menu)`
	background-color: ${backgroundColor};
`;

export const StyledLink = styled(Link)`
	a {
		color: green;
		&.active {
			pointer-events: none;
			user-select: none;
		}
	}
`;
