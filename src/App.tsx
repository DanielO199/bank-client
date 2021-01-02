import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'core/globals/mainRoutes';
import { Logger } from 'modules/log/components/logger';

const App = () => {
	return (
		<div className="full-height">
			<Logger />
			{routes.map((route: Route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						name={route.name}
						render={(props) => <route.component {...props} />}
					/>
				);
			})}
		</div>
	);
};

export { App as default };
