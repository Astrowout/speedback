import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Router from "next/router";

import { Loader } from "../components";
import { AuthContext } from '../context';

const AppCallback: NextPage = () => {
	const { methods } = useContext(AuthContext);

	const completeLogout = () => {
		Router.replace("/");
	}

	useEffect(() => {
		const init = async () => {
			await methods.logout();

			completeLogout();
		}

		init();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

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
