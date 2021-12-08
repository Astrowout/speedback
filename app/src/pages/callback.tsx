import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Router from "next/router";

import { Loader } from "../components";
import { AuthContext } from '../context';

const AppCallback: NextPage = () => {
	const { isLoading } = useContext(AuthContext);

	const completeLogin = () => {
		Router.replace("/");
	}

	useEffect(() => {
		if (!isLoading) {
			completeLogin();
		}
	}, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<Head>
				<title>Loading speedback...</title>
				<meta name="robots" content="noindex, nofollow" />
			</Head>

			<Loader fullscreen />
		</>
	);
}

export default AppCallback;
