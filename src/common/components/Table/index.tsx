import { StyledTable } from './styles';

export const Table = ({
	columns,
	data,
	rowKey,
	loading,
	onChange,
	pagination
}) => {
	return (
		<StyledTable
			columns={columns}
			rowKey={rowKey}
			loading={loading}
			dataSource={data}
			onChange={onChange}
			pagination={pagination}
		/>
	);
};
