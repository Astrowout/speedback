import { FunctionComponent } from 'react';
import * as HeroIcons from '@heroicons/react/outline';

interface IFeature {
	id: string;
	title: string;
	description: string;
	icon: keyof typeof HeroIcons;
}

type FeaturesProps = {
	eyebrow: string;
	title: string;
	description?: string;
	features: IFeature[];
}

const Features: FunctionComponent<FeaturesProps> = ({ features, eyebrow, title, description }) => {
	return (
		<div id="features" className="py-12 lg:py-32 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-indigo-500 font-bold text-sm tracking-wider uppercase">
						{eyebrow}
					</h2>

					<p className="mt-2 font-brand text-gray-900 text-3xl leading-tight md:text-4xl md:leading-tight xl:text-5xl xl:leading-tight">
						{title}
					</p>

					<p className="mt-4 max-w-prose mx-auto text-gray-500">
						{description}
					</p>
				</div>

				<div className="mt-12 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-20">
					{features.map((feature) => {
						const Icon = HeroIcons[feature.icon as keyof typeof HeroIcons];

						return (
							<div key={feature.id} className="relative flex items-start max-w-lg">
								<div className="flex items-center justify-center h-20 w-20 flex-shrink-0 rounded-full bg-indigo-100 text-indigo-500">
									<Icon className="h-8 w-8" aria-hidden="true" />
								</div>

								<div className="flex flex-col ml-8">
									<p className="text-lg font-bold text-gray-900">{feature.title}</p>
									<div className="mt-2 text-gray-500">{feature.description}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Features;
