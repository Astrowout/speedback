import { FunctionComponent, useContext } from "react";

import { AppHeader, Loader } from "../components";
import { AuthContext } from "../context";
import { useRouterGuard } from "../hooks";

const AppLayout: FunctionComponent = ({ children }) => {
	const { isLoading, isLoggedIn } = useContext(AuthContext);
	useRouterGuard({ isLoggedIn, isLoading });

	return !isLoggedIn ? (
		<Loader fullscreen />
		) : (
		<>
			<AppHeader />
			{ children }
	  	</>
	)
}

export default AppLayout;
