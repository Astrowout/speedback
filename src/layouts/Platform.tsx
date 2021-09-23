import { FunctionComponent } from "react";

import { AppHeader } from "../components";

const AppLayout: FunctionComponent = ({ children }) => {
	return (
		<>
			<AppHeader />
			{ children }
	  	</>
	)
}

export default AppLayout;
