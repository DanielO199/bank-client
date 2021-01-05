import Loadable from 'react-loadable';

import { ProtectedRoute, RerouteLogged, Spinner } from 'common/components';

const DashboardPage = Loadable({
	loader: () => import('views/Dashboard'),
	loading: Spinner
});

export const authRoutes = [
	{
		path: '/dashboard',
		name: 'Admin Login',
		component: DashboardPage
	}
];
