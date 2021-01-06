import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined
} from '@ant-design/icons';
import { useLocation, useHistory } from 'react-router-dom';

import { StyledMenuItem, StyledMenu, StyledLink } from './styles';

export const Navigation = () => {
	const location = useLocation().pathname;
	const history = useHistory();
	console.log(location);

	//zrobic tablice i zmapowac StyleMenuItem

	return (
		<StyledMenu mode="inline" defaultSelectedKeys={[`${location}`]}>
			{/* <StyledLink to="/dashboard">Dashboard</StyledLink>
			<StyledLink to="/history">History</StyledLink> */}

			<StyledMenuItem
				onClick={() => history.push('/dashboard')}
				key="/dashboard"
				icon={<UserOutlined />}>
				Dashboard
				{/* <StyledLink to="/dashboard">Dashboard</StyledLink> */}
			</StyledMenuItem>
			<StyledMenuItem
				onClick={() => history.push('/dashboard')}
				key="/dashboard"
				icon={<VideoCameraOutlined />}>
				Payments
				{/* <StyledLink to="/payments"></StyledLink> */}
			</StyledMenuItem>
			<StyledMenuItem
				onClick={() => history.push('/history')}
				key="/history"
				icon={<UploadOutlined />}>
				{/* <StyledLink to="/history"> */}
				History
				{/* </StyledLink> */}
			</StyledMenuItem>
			<StyledMenuItem
				onClick={() => history.push('/history')}
				key="/history"
				icon={<UploadOutlined />}>
				{/* <StyledLink to="/settings"> */}
				Settings
				{/* </StyledLink> */}
			</StyledMenuItem>
		</StyledMenu>
	);
};
