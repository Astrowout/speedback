"use client";

import { Inter, Strait } from '@next/font/google';

import { AuthContext } from '../context';
import { useAuth, useUser } from '../hooks';

const interFont = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	// default, can also use "swap" to ensure custom font always shows
	display: 'swap',
});

const straitFont = Strait({
	variable: '--font-strait',
	weight: ["400"],
	subsets: ['latin'],
	// default, can also use "swap" to ensure custom font always shows
	display: 'swap',
});

import '../styles/main.css';

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	const { user, isLoggedIn, isLoading, methods } = useAuth();
	useUser(user, methods.setUser);

	return (
		<html lang="en" className={`${interFont.variable} ${straitFont.variable}`}>
			<body>
				<AuthContext.Provider
					value={{
						isLoggedIn,
						isLoading,
						user,
						methods
					}}
				>
					{children}
				</AuthContext.Provider>
			</body>
		</html>
	);
}
