import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

import { RichText } from '../../../components';
import { Queries } from '../../../helpers';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';
import client from "../../../helpers/graphql-client";

const Cookies: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<main className="mx-auto w-full max-w-screen-xl section-spacing container-spacing">
			<Link
				href="/"
				className="mb-6 inline-flex items-center text-sm text-gray-600 hover:text-black"
			>
				<ArrowSmLeftIcon className="block mr-1 w-5 h-5" aria-hidden="true" />

				<span>
					Back
				</span>
			</Link>

			<RichText
				eyebrow={data.eyebrow}
				title={data.title}
				content={data.content.html}
			/>
		</main>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: { contentPage, global } } = await client.query({
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
