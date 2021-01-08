import LoginPage from 'views/Login';

import { RerouteLogged } from 'common/components';

export const homeRoutes = [
	{
		path: '/login',
		name: 'Login Page',
		component: LoginPage
	},
	{
		path: '/register',
		name: 'Register Page',
		component: LoginPage
	}
];
