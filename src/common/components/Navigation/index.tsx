import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined
} from '@ant-design/icons';
import { useLocation, useHistory } from 'react-router-dom';

import { StyledMenuItem, StyledMenu } from './styles';

export const Navigation = () => {
	const location = useLocation().pathname;
	const history = useHistory();

	const navigateTo = (path) => {
		history.push(path);
	};

	const navigation = [
		{
			path: '/dashboard',
			name: 'Dashboard',
			icon: <UserOutlined />
		},
		{
			path: '/payments',
			name: 'Payments',
			icon: <VideoCameraOutlined />
		},
		{
			path: '/history',
			name: 'History',
			icon: <UploadOutlined />
		},
		{
			path: '/settings',
			name: 'Settings',
			icon: <UserOutlined />
		}
	];

	return (
		<StyledMenu mode="inline" defaultSelectedKeys={[`${location}`]}>
			{navigation.map((item) => (
				<StyledMenuItem
					onClick={() => navigateTo(`${item.path}`)}
					key={`${item.path}`}
					icon={item.icon}>
					{item.name}
				</StyledMenuItem>
			))}
		</StyledMenu>
	);
};
