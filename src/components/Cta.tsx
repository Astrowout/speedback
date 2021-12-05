import { FunctionComponent } from 'react';
import Link from "next/link";

import { Button } from './index';

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

				<Button
					url="/login"
					compact={false}
					className="mt-8 lg:mt-0"
				>
					Try it for free
				</Button>
			</div>
		</div>
	)
}

export default Cta;
