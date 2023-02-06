import Link from "next/link";

import { RichText } from '../../../components';
import { Queries } from '../../../helpers';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';
import client from "../../../helpers/graphql-client";

const Cookies = async () => {
	const { data } = await client.query(Queries.getContentPage, {
		id: "ckuef3btsevdf0b07qannyrzw",
	});

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

export default Cookies;
