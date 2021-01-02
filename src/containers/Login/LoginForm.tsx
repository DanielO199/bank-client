import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchBillsAction } from 'actions/billActions';

const LoginForm = () => {
	// const user = 	useSelector(state=> state)
	const [fetchedUsers, setFetched] = useState<Promise<void>>();
	useEffect(() => {
		console.log('xd');
		setFetched(fetchBillsAction());
	}, [setFetched]);
	return <div>{fetchedUsers && JSON.stringify(fetchedUsers)}</div>;
};

export default LoginForm;
