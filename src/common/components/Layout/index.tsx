import { Sidebar } from '../Sidebar';
import { StyledLayout } from './styles';

const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<Sidebar />
			{children}
		</StyledLayout>
	);
};

export default Layout;
