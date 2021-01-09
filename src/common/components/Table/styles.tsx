import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTable = styled(Table)`
	@media only screen and (max-width: 1024px) {
		table {
			border: 0;
			thead {
				border: none;
				clip: rect(0 0 0 0);
				height: 1px;
				margin: -1px;
				overflow: hidden;
				padding: 0;
				position: absolute;
				width: 1px;
			}
			tr {
				font-size: 12px;
				display: block;
				margin-bottom: 0.625em;
				border: solid black 1px;
				&:nth-child(even) {
					background-color: #cfcfcf;
				}
			}
			td {
				display: flex;
				align-items: center;
				justify-content: space-between;
				text-align: right;
				&::before {
					float: left;
					font-weight: bold;
				}
				&:last-child {
					border-bottom: 0;
				}
			}
		}
	}
	.ant-tag {
		margin-right: 0;
	}
	.ant-empty {
		visibility: hidden;
	}
	.ant-spin-nested-loading {
		> div {
			> .ant-spin {
				max-height: initial;
			}
		}
	}
`;
