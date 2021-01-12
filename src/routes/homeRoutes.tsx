import AuthPage from 'views/Auth';

import { RerouteLogged } from 'common/components';

export const homeRoutes = [
	{
		path: '/login',
		name: 'Auth Page',
		component: RerouteLogged(AuthPage)
	}
];
