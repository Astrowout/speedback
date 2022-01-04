import Head from 'next/head';
import type { NextPage } from "next";

import { LoginForm, Logo } from '../../components';

const AppLogin: NextPage = () => {
	return (
		<>
			<Head>
				<title>Login - speedback</title>
				<meta name="description" content="Bugbash your digital products at hyperspeed with speedback." />
				<meta name="robots" content="noindex, nofollow" />
			</Head>

			<main className="min-h-screen flex items-center justify-center container-spacing section-spacing">
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
			</main>
		</>
	)
}

export default AppLogin;
