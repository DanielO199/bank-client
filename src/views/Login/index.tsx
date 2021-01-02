//TUTAJ OWIJAM W LAYOUT I EXPORTUJE LOGINPAGECONTAINER I SIEMANO

import { fetchBillsAction } from 'actions/billActions';
import LoginForm from 'containers/Login/LoginForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';

const LoginPage = () => {
	// const user = useSelector(({ bill }: RootState) => bill.bills);
	const user = useSelector((state: RootState) => state.bill.bills);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBillsAction());
	}, []);
	return <div>{JSON.stringify(user)}</div>;
};

export default LoginPage;
