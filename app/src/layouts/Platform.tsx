import { FunctionComponent } from "react";

import { AppHeader, Version, Help } from "../components";

const AppLayout: FunctionComponent = ({ children }) => {
	return (
		<>
			<AppHeader />

			{children}

			<Version version="beta" />

			<Help />
		</>
	)
}

export default AppLayout;
