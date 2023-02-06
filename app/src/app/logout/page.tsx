"use client";

import { useContext, useEffect } from 'react';
import { NextPage } from 'next';

import { Loader } from "../../components";
import { AuthContext } from '../../context';

const AppCallback: NextPage = () => {
	const { methods } = useContext(AuthContext);

	useEffect(() => {
		const init = async () => {
			await methods.logout();
		}

		init();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Loader fullscreen />
	);
}

export default AppCallback;
