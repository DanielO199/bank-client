import { Redirect } from 'react-router-dom';

import { authStore } from 'core/stores';

export default function ProtectedCustomer(Children) {
	return (props) => (
		<div className="authComponent full-height">
			{authStore.accessToken &&
			(authStore.isUserCustomerAdmin || authStore.isUserCustomerUser) ? (
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
