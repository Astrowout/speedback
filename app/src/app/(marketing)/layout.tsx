import { ReactNode } from "react";

import { Footer, Header } from "../../components";
import client from "../../helpers/graphql-client";
import { Queries } from "../../helpers";

type MarketingLayoutProps = {
	children: ReactNode
}

export default async function MarketingLayout({
	children,
}: MarketingLayoutProps) {
	const { data: { global: data } } = await client.query(Queries.getLandingPage);

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
