import AuthPage from 'views/Auth';

import { RerouteLogged } from 'common/components';

export const homeRoutes = [
	{
		path: '/login',
		name: 'Login Page',
		component: AuthPage
	}
];
