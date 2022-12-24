import { FunctionComponent } from 'react';
import Image from 'next/image';

import { Button } from './index';

interface IVisual {
	url: string;
	width: number;
	height: number;
}

type HeroProps = {
	title: string;
	description: string;
	visual: IVisual;
}

const Hero: FunctionComponent<HeroProps> = ({ title, description, visual }) => {
	return (
		<section className="max-w-screen-xl mx-auto container-spacing relative flex space-x-8 items-end overflow-hidden">
			<div className="py-12 pb-72 md:pb-64 lg:py-24 xl:pt-16 max-w-lg flex flex-col items-start relative z-10">
				<h1 className="font-brand text-gray-900 text-4xl leading-tight md:text-5xl md:leading-tight xl:text-6xl xl:leading-tight">
					{title}
				</h1>

				<p className="mt-2 text-gray-500">
					{description}
				</p>

				<Button
					url="/login"
					compact={false}
					className="mt-8"
				>
					Try it for free
				</Button>
			</div>

			{visual && (
				<div aria-hidden="true" className="absolute -right-8 max-w-lg lg:max-w-2xl z-0 lg:relative pointer-events-none">
					<Image
						src={visual.url}
						alt="image"
						width={visual.width}
						height={visual.height}
						priority
					/>
				</div>
			)}
		</section>
	)
}

export default Hero;
