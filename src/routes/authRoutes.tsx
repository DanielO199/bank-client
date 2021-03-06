import DashboardPage from 'views/Dashboard';
import PaymentPage from 'views/Payment';
import HistoryPage from 'views/History';
import SettingsPage from 'views/Settings';
import { ProtectedRoute } from 'common/components';

export const authRoutes = [
	{
		path: '/dashboard',
		name: 'User Dashboard',
		component: ProtectedRoute(DashboardPage)
	},
	{
		path: '/payments',
		name: 'Create Payment',
		component: ProtectedRoute(PaymentPage)
	},
	{
		path: '/history',
		name: 'User History Payments',
		component: ProtectedRoute(HistoryPage)
	},
	{
		path: '/settings',
		name: 'User Settings',
		component: ProtectedRoute(SettingsPage)
	}
];
