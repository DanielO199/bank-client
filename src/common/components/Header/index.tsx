import React from 'react';
import { useLocation } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import {
	StyledHeader,
	StyledLocation,
	Wrapper,
	Logout,
	StyledLogoutIcon
} from './styles';

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const Header = ({ isCollapsedSidebar, toggle }) => {
	let location = useLocation().pathname.replace('/', '');

	return (
		<StyledHeader>
			<Wrapper>
				{React.createElement(
					isCollapsedSidebar ? MenuUnfoldOutlined : MenuFoldOutlined,
					{
						className: 'trigger',
						onClick: toggle
					}
				)}
				<StyledLocation> {capitalizeFirstLetter(location)}</StyledLocation>
			</Wrapper>
			<Logout onClick={() => console.log('Logout')}>
				<StyledLogoutIcon rotate={-90} />
				<span>Logout</span>
			</Logout>
		</StyledHeader>
	);
};
