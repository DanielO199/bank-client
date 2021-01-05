import { useState } from 'react';

import { Logo, Navigation, Header, Content } from 'common/components';
import { StyledSidebar, StyledLayout } from './styles';

export const Sidebar = ({ children }) => {
	const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);

	const toggle = () => {
		setIsCollapsedSidebar(!isCollapsedSidebar);
	};

	return (
		<StyledLayout>
			<StyledSidebar trigger={null} collapsible collapsed={isCollapsedSidebar}>
				<Logo />
				<Navigation />
			</StyledSidebar>
			<StyledLayout className="site-layout">
				<Header toggle={toggle} isCollapsedSidebar={isCollapsedSidebar} />
				<Content>{children}</Content>
			</StyledLayout>
		</StyledLayout>
	);
};
