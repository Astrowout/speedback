import { FunctionComponent } from 'react';
import Link from "next/link";

type CtaProps = {
	title: string;
	subtitle: string;
}

const Cta: FunctionComponent<CtaProps> = ({ title, subtitle }) => {
	return (
		<div className="bg-white">
			<div className="container-spacing max-w-5xl py-12 mx-auto lg:py-16 lg:flex lg:items-center lg:justify-between">
				<h2 className="font-brand">
					<span className="block text-gray-900 text-3xl sm:text-4xl">
						{title}
					</span>

					<span className="block mt-2 text-indigo-500 text-2xl sm:text-3xl">
						{subtitle}
					</span>
				</h2>

				<Link href="/login">
					<a
						className="mt-8 inline-block lg:mt-0 lg:flex-shrink-0 px-5 py-3 rounded text-white bg-indigo-500 hover:bg-indigo-700"
					>
						Try it for free
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Cta;
