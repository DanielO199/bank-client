import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouteProps } from 'react-router-dom';

import { isLoggedAction } from 'actions/authActions';
import { mainRoutes } from 'routes';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('accessToken')) dispatch(isLoggedAction());
	}, []);

	return (
		<>
			{mainRoutes.map((route: RouteProps, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						render={(props) => <route.component {...props} />}
					/>
				);
			})}
		</>
	);
};

export { App as default };
