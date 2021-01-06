// import Loadable from 'react-loadable';
import LoginPage from 'views/Login';

import { RerouteLogged, Spinner } from 'common/components';

// const LoginPage = Loadable({
// 	loader: () => import('views/Login'),
// 	loading: Spinner
// });

export const homeRoutes = [
	{
		path: '/login',
		name: 'Login Page',
		component: LoginPage
	}
];
