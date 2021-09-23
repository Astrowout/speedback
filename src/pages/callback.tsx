import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import Router from "next/router";

import { Loader } from "../components";
import { AuthContext } from '../context';

const AppCallback: NextPage = () => {
	const { isLoading, methods } = useContext(AuthContext);

	const completeLogin = async () => {
		await methods.loginWithCredential();
		Router.replace("/");
	}

	useEffect(() => {
		if (!isLoading) {
			completeLogin();
		}
	}, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

	return <Loader fullscreen />;
}

export default AppCallback;
