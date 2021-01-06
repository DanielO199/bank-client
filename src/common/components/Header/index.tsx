import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { StyledHeader } from './styles';

export const Header = ({ isCollapsedSidebar, toggle }) => {
	return (
		<StyledHeader style={{ paddingLeft: 20 }}>
			{React.createElement(
				isCollapsedSidebar ? MenuUnfoldOutlined : MenuFoldOutlined,
				{
					className: 'trigger',
					onClick: toggle
				}
			)}
		</StyledHeader>
	);
};
