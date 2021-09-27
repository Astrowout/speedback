import { useEffect } from 'react';
import Router from "next/router";

const HOME_URL = "/home";

interface RouterGuardProps {
	isLoggedIn: boolean;
	isLoading: boolean;
}

const useRouterGuard = ({ isLoggedIn, isLoading }: RouterGuardProps) => {
	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (!isLoggedIn) {
			Router.push(HOME_URL);
		}
	}, [isLoading, isLoggedIn]);
}

export default useRouterGuard;
