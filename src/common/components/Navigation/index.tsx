import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined
} from '@ant-design/icons';

import { StyledMenuItem, StyledMenu } from './styles';

export const Navigation = () => {
	return (
		<StyledMenu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			<StyledMenuItem key="1" icon={<UserOutlined />}>
				nav 1
			</StyledMenuItem>
			<StyledMenuItem key="2" icon={<VideoCameraOutlined />}>
				nav 2
			</StyledMenuItem>
			<StyledMenuItem key="3" icon={<UploadOutlined />}>
				nav 3
			</StyledMenuItem>
		</StyledMenu>
	);
};
