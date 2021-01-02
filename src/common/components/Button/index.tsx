import styled from 'styled-components';

import { StyledButton } from './styles';

interface IButtonStyle {
	width?: string;
	minWidth?: string;
	minHeight?: string;
	margin?: string;
	padding?: string;
}

interface IButton {
	children: any;
	onClick?: Function;
	disabled?: boolean;
	title?: string;
	role?: string;
	style?: IButtonStyle;
}

export const Button = ({
	style,
	onClick,
	disabled,
	role,
	title,
	children
}: IButton) => {
	return (
		<StyledButton
			title={title}
			onClick={onClick}
			style={style}
			disabled={disabled}
			role={role}>
			{children}
		</StyledButton>
	);
};

export const TableActionButton = styled(StyledButton)`
	padding: ${({ padding }) => padding};
	min-width: 168px;
	min-height: 35px;
	margin: ${({ margin }) => margin};
`;
