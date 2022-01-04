import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

import { MarketingLayout } from '../layouts';
import { RichText } from '../components';
import { ApolloClient, Queries } from '../helpers';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';

const Cookies: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<MarketingLayout
			data={{
				footerDescription: data.footerDescription,
				footerVisual: data.footerVisual,
			}}
		>
			<Head>
				<title>{data.eyebrow} - speedback</title>
				<meta name="description" content="Bugbash your digital products at hyperspeed with speedback." />
			</Head>

			<main className="xl:container section-spacing container-spacing">
				<Link
					href="/"
				>
					<a className="mb-6 inline-flex items-center text-sm text-gray-600 hover:text-black">
						<ArrowSmLeftIcon className="block mr-1 w-5 h-5" aria-hidden="true" />
						Back
					</a>
				</Link>

				<RichText
					eyebrow={data.eyebrow}
					title={data.title}
					content={data.content.html}
				/>
			</main>
		</MarketingLayout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: { contentPage, global } } = await ApolloClient.query({
		query: Queries.getContentPage,
		variables: {
			id: "ckuef3btsevdf0b07qannyrzw",
		}
	});

	return {
		props: {
			data: {
				...contentPage,
				...global
			},
		},
	}
}

export default Cookies;
