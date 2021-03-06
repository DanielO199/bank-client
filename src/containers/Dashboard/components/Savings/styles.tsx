import styled from 'styled-components';

interface Props {
	justifyContent?: string;
}

export const Wrapper = styled.div`
	display: flex;
	justify-content: ${({ justifyContent = 'space-between' }: Props) =>
		justifyContent};
	align-items: center;
	flex-grow: 2;
	min-width: 250px;
	background-color: rgb(243, 243, 243);
	border: 1px solid rgba(0, 0, 0, 0.12);
	margin-right: 8px;
	margin-top: 10px;
	padding: 0.5rem 1.5rem;
	p {
		font-size: 18px;
	}
`;
