import { Cta, Features, Hero, Pricing, ForWhom } from '../../components';
import { Queries } from '../../helpers';
import client from "../../helpers/graphql-client";

const Home = async () => {
	const { data: { landingPage: data } } = await client.query(Queries.getLandingPage);

	return (
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
	)
}

export default Home;
