import Router from "next/router";
import { FunctionComponent, useContext, useEffect } from "react";

import { AppHeader, Version, Help } from "../components";
import { AuthContext } from "../context";

const AppLayout: FunctionComponent = ({ children }) => {
	const { isLoggedIn } = useContext(AuthContext);

	useEffect(() => {
		if (!isLoggedIn) {
			Router.replace("/login");
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<AppHeader />

			{children}

			<Version
				className="my-6"
			/>

			<Help />
		</>
	)
}

export default AppLayout;
