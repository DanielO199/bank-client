import Loadable from 'react-loadable';

import DashboardPage from 'views/Dashboard';
import HistoryPage from 'views/History';
import { ProtectedRoute, RerouteLogged, Spinner } from 'common/components';

// const DashboardPage = Loadable({
// 	loader: () => import('views/Dashboard'),
// 	loading: Spinner
// });

// const HistoryPage = Loadable({
// 	loader: () => import('views/History'),
// 	loading: Spinner
// });

export const authRoutes = [
	{
		path: '/dashboard',
		name: 'User Dashboard',
		component: DashboardPage
	},
	{
		path: '/history',
		name: 'User History Payments',
		component: HistoryPage
	}
];
