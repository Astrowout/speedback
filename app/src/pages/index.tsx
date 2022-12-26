import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { MarketingLayout } from '../layouts';
import { Cta, Features, Hero, Pricing, ForWhom } from '../components';
import { ApolloClient, Queries } from '../helpers';

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<MarketingLayout
			data={{
				footerDescription: data.footerDescription,
			}}
		>
			<Head>
				<title>Welcome @ speedback</title>
				<meta name="description" content="Bugbash your digital products at hyperspeed with speedback." />
			</Head>

			<main>
				<Hero
					title={data.heroTitle}
					description={data.heroDescription}
					visual={data.heroVisual}
				/>

				<Features
					eyebrow={data.featuresEyebrow}
					title={data.featuresTitle}
					description={data.featuresDescription}
					features={data.features}
				/>

				<ForWhom
					eyebrow={data.forWhomEyebrow}
					title={data.forWhomTitle}
					description={data.forWhomDescription}
					audiences={data.targetAudiences}
				/>

				<Pricing
					eyebrow={data.pricing.eyebrow}
					title={data.pricing.title}
					description={data.pricing.description}
					monthlyCost={data.pricing.monthlyCost}
					yearlyCost={data.pricing.yearlyCost}
				/>

				<Cta
					title="Start gathering comments on your websites."
					subtitle="Easy setup in only 3 minutes."
				/>
			</main>
		</MarketingLayout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: { landingPage, global } } = await ApolloClient.query({
		query: Queries.getLandingPage,
	});

	return {
		props: {
			data: {
				...landingPage,
				...global
			},
		},
	}
}

export default Home;
