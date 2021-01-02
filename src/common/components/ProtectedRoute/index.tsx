import { Redirect } from 'react-router-dom';

import { authStore } from 'stores/authStore';

export default function ProtectedRoute(Children) {
	return (props) => (
		<div className="authComponent full-height">
			{authStore.accessToken ? (
				<Children {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/customer/login',
						state: { from: props.location }
					}}
				/>
			)}
		</div>
	);
}
