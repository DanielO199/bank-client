import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const drawerPortal = document.getElementById('drawer-hook');

interface IProps {
	children: ReactNode;
}

export const SideDrawer = ({ children }: IProps) => {
	return (
		drawerPortal &&
		ReactDOM.createPortal(
			<StyledSideDrawer className="side-drawer">{children}</StyledSideDrawer>,
			drawerPortal
		)
	);
};

const SideDrawerAnimation = keyframes`

0% {
  opacity: 0.5;
  height: 10vh;
}

100% {
  opacity: 1;
  height: 100vh;
}
`;

const StyledSideDrawer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;
	height: 100vh;
	width: 100vw;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	animation: ${SideDrawerAnimation} 1s;
`;
