import { StyledTable } from './styles';

export const Table = ({ columns, data, rowKey, loading }) => {
	return (
		<StyledTable
			columns={columns}
			rowKey={rowKey}
			loading={loading}
			dataSource={data}
		/>
	);
};
