import { FunctionComponent } from "react";

import { Footer, Header } from "../components";

type MarketingLayoutProps = {
	data: any;
}

const MarketingLayout: FunctionComponent<MarketingLayoutProps> = ({ children, data }) => {
	return (
		<>
			<Header />

			{children}

			<Footer
				description={data.footerDescription}
				visual={data.footerVisual}
			/>
	  	</>
	)
}

export default MarketingLayout;
