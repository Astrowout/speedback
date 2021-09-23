import { FunctionComponent } from "react";

import { Header } from "../components";

const AppLayout: FunctionComponent = ({ children }) => {
	return (
		<>
			<Header />
			{ children }
	  	</>
	)
}

export default AppLayout;
