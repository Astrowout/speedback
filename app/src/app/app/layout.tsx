"use client";

import Router from "next/router";
import { ReactNode, useContext, useEffect } from "react";

import { AppHeader, Version, Help } from "../../components";
import { AuthContext } from "../../context";

type AppLayoutProps = {
	children: ReactNode,
}

export default function AppLayout({
	children,
}: AppLayoutProps) {
	const { isLoggedIn, isLoading } = useContext(AuthContext);

	useEffect(() => {
		if (!isLoading && !isLoggedIn) {
			Router.replace("/login");
		}
	}, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<AppHeader />

			{children}

			<Version className="my-6" />

			<Help />
		</>
	)
}
