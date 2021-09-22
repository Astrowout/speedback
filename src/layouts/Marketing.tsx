import { FunctionComponent } from "react";

import { Header } from "../components";

const PlatformLayout: FunctionComponent = ({ children }) => {
	return (
		<>
			<Header />
			{ children }
	  	</>
	)
}

export default PlatformLayout;