"use client";

import type { NextPage } from "next";

import { LoginForm, Logo, Version } from '../../components';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context';
import Router from 'next/router';

const AppLogin: NextPage = () => {
	const { isLoggedIn, isLoading } = useContext(AuthContext);

	useEffect(() => {
		if (!isLoading && isLoggedIn) {
			Router.replace("/app/projects");
		}
	}, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<main className="min-h-screen flex flex-col items-center container-spacing section-spacing">
			<div className="flex-grow flex items-center">
				<div className="max-w-md w-full space-y-6 flex flex-col">
					<Logo url="/" className="self-center" size={32} />

					<div>
						<h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-900">
							Sign in with your email.
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							We&apos;re using passwordless login for your convenience.
						</p>
					</div>

					<LoginForm />
				</div>
			</div>

			<Version version="beta" />
		</main>
	)
}

export default AppLogin;
