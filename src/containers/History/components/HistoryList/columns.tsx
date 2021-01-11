import { StyledName } from './styles';

export const columns = [
	{
		title: 'Sender',
		dataIndex: 'senderName',
		key: ['senderName', 'senderAccountNumber'],
		render: (text, text2) => (
			<>
				<StyledName>{text}</StyledName>
				<div>{text2.senderAccountNumber}</div>
			</>
		)
	},
	{
		title: 'Receiver',
		dataIndex: 'receiverName',
		key: ['receiverName', 'receiverAccountNumber'],
		render: (text, text2) => (
			<>
				<StyledName>{text}</StyledName>
				<div>{text2.senderAccountNumber}</div>
			</>
		)
	},
	{
		title: 'Money',
		dataIndex: 'money',
		key: 'money'
	},
	{
		title: 'Title',
		key: 'title',
		dataIndex: 'title'
	},
	{
		title: 'Date',
		key: 'createdAt',
		dataIndex: 'createdAt',
		render: (text) => (
			<>
				<StyledName>{text.slice(0, 10)}</StyledName>
			</>
		)
	}
];
