import { Route, RouteProps } from 'react-router-dom';

import { mainRoutes } from 'routes';
// import { Logger } from 'modules/log/components/logger';

const App = () => {
	return (
		<div className="full-height">
			{/* <Logger /> */}
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
		</div>
	);
};

export { App as default };
