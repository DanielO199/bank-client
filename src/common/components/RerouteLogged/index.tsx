import { Redirect } from 'react-router-dom';

import { IsLogged } from 'utils';

export default function RerouteLogged(Children) {
	return (props) => (
		<>
			{IsLogged() ? (
				<Redirect
					to={{
						pathname: '/dashboard',
						state: { from: props.location }
					}}
				/>
			) : (
				<Children {...props} />
			)}
		</>
	);
}
