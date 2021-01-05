import { Sidebar } from '../Sidebar';
import { StyledLayout } from './styles';

export const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<Sidebar />
			{children}
		</StyledLayout>
	);
};
