import { FunctionComponent } from 'react';
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';

const features = [
	{
	  name: 'Competitive exchange rates',
	  description:
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
	  icon: GlobeAltIcon,
	},
	{
	  name: 'No hidden fees',
	  description:
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
	  icon: ScaleIcon,
	},
	{
	  name: 'Transfers are instant',
	  description:
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
	  icon: LightningBoltIcon,
	},
  ]

type FeaturesProps = {
	eyebrow: string;
	title: string;
	description?: string;
}

const Features: FunctionComponent<FeaturesProps> = ({ children, eyebrow, title, description }) => {
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

				<div className="mt-12">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
						{features.map((feature) => (
							<div key={feature.name} className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<feature.icon className="h-6 w-6" aria-hidden="true" />
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}

export default Features;
