import styled from 'styled-components';
import { Card } from 'antd';
import { borderColor } from 'common/globals/theme';

export const StyledCard = styled(Card)`
	width: 100%;
	overflow-y: auto;
	max-height: 280px;
	.ant-card-body {
		margin: 0;
		padding: 0;
	}
`;

export const StyledCardItem = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 1rem;
	margin: 0;
	transition: 0.3s ease;
	border-bottom: solid ${borderColor} 1px;
	&:hover {
		background-color: #f0f0f0;
		transition: 0.3s ease;
	}
`;
