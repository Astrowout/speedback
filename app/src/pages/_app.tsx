import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from "@apollo/client";

import { ApolloClient } from '../helpers';
import { AuthContext, GlobalContext } from '../context';
import { useAuth, useUser } from '../hooks';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	const { user, isLoggedIn, isLoading, methods } = useAuth();
	useUser(user, methods.setUser);

	return (
		<ApolloProvider client={ApolloClient}>
			<GlobalContext.Provider value={null}>
				<AuthContext.Provider
					value={{
						isLoggedIn,
						isLoading,
						user,
						methods
					}}
				>
					<Head>
						<title>speedback</title>
						<meta name="description" content="Fast feedback from your customers with speedback." />
						<link rel="icon" href="/favicon.ico" />
					</Head>

					<Component {...pageProps} />
				</AuthContext.Provider>
			</GlobalContext.Provider>
		</ApolloProvider>
	)
};

export default App;
