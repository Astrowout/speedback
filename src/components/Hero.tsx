import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IVisual {
	url: string;
}

type HeroProps = {
	title: string;
	description: string;
	visual: IVisual;
}

const Hero: FunctionComponent<HeroProps> = ({ title, description, visual }) => {
	return (
		<section className="max-w-screen-xl mx-auto container-spacing flex space-x-16 items-center">
			<div className="py-16 sm:py-24 lg:py-32 sm:max-w-lg flex flex-col items-start">
				<h1 className="font-brand text-gray-900 text-4xl leading-tight lg:text-6xl lg:leading-tight">
					{title}
				</h1>

				<p className="mt-2 text-gray-500">
					{description}
				</p>

				<Link href="/login">
					<a
						className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent rounded text-white bg-indigo-500 hover:bg-indigo-700"
					>
						Try it for free
					</a>
				</Link>
			</div>

			<div aria-hidden="true" className="relative pointer-events-none lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
				<Image src={visual.url} alt="image" width="1628" height="1165" />
			</div>
		</section>
	)
}

export default Hero;
