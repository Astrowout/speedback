import { useEffect } from 'react';
import Router from "next/router";

const LOGIN_URL = "/login";

interface RouterGuardProps {
	isLoggedIn: boolean;
	isLoading: boolean;
}

const useRouterGuard = ({ isLoggedIn, isLoading }: RouterGuardProps) => {
	// If user is not logged in, we should redirect.
	useEffect(() => {
		if (isLoading || Router.pathname === "/home") {
			return;
		}

		if (!isLoggedIn && Router.pathname !== LOGIN_URL) {
			Router.push(LOGIN_URL);
		}
	}, [isLoading, isLoggedIn]);
}

export default useRouterGuard;
