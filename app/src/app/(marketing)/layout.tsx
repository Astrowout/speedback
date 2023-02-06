import { ReactNode } from "react";

import { Footer, Header } from "../../components";

type MarketingLayoutProps = {
	data: any;
	children: ReactNode
}

export default function MarketingLayout({
	data,
	children,
}: MarketingLayoutProps) {
	return (
		<>
			<Header />

			{children}

			<Footer
				description={data.footerDescription}
			/>
		</>
	)
}
