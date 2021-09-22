import { FunctionComponent } from "react";

import { AppHeader } from "../components";

const PlatformLayout: FunctionComponent = ({ children }) => {
	return (
		<>
			<AppHeader />
			{ children }
	  	</>
	)
}

export default PlatformLayout;