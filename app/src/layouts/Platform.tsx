import { FunctionComponent } from "react";

import { AppHeader, Version } from "../components";

const AppLayout: FunctionComponent = ({ children }) => {
	return (
		<>
			<AppHeader />

			{children}

			<Version version="beta" />
		</>
	)
}

export default AppLayout;
