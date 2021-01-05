import { Sidebar } from 'common/components';
import { StyledLayout } from './styles';

export const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<Sidebar children={children} />
		</StyledLayout>
	);
};
