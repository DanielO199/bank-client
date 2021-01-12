import { Redirect } from 'react-router-dom';

import { IsLogged } from 'utils';

export default function ProtectedRoute(Children) {
	return (props) => (
		<div className="authComponent full-height">
			{IsLogged() ? (
				<Children {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			)}
		</div>
	);
}
