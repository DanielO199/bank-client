import styled from 'styled-components';

interface Props {
	justifyContent?: string;
}

export const Wrapper = styled.div`
	display: flex;
	justify-content: ${({ justifyContent = 'space-between' }: Props) =>
		justifyContent};
	flex-grow: 3;
	min-width: 250px;
	min-height: 280px;
	border: solid black 2px;
	margin-right: 8px;
	margin-top: 10px;
`;
