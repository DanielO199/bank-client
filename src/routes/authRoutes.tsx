import Loadable from 'react-loadable';

import { ProtectedRoute, RerouteLogged, Spinner } from 'common/components';

const LoginPage = Loadable({
	loader: () => import('views/Login'),
	loading: Spinner
});

export const authRoutes = [
	{
		path: '/login',
		name: 'Admin Login',
		component: RerouteLogged(LoginPage)
	}
];
