import { Redirect } from 'react-router-dom';

import { authStore } from 'stores/authStore';

export default function RerouteLogged(Children) {
	return (props) => (
		<div className="authComponent full-height">
			{authStore.accessToken ? (
				<Redirect
					to={{
						pathname: '/admin/reports',
						state: { from: props.location }
					}}
				/>
			) : (
				<Children {...props} />
			)}
		</div>
	);
}
