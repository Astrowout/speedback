import { FunctionComponent } from 'react';
import cn from "classnames";
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
			<div className="max-w-5xl mx-auto container-spacing">
				<div className="text-center">
					<h2 className="text-indigo-500 font-bold text-sm tracking-wider uppercase">
						{eyebrow}
					</h2>

					<p className="mt-2 font-brand text-gray-900 text-3xl leading-tight lg:text-5xl lg:leading-tight">
						{title}
					</p>

					{description && (
						<p className="mt-4 max-w-prose mx-auto text-gray-500">
							{description}
						</p>
					)}
				</div>

				<div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-20">
					{features.map((feature, i) => {
						const Icon = HeroIcons[feature.icon as keyof typeof HeroIcons];
						const isEven = i % 2 === 0;

						return (
							<div
								key={feature.id}
								className={cn("relative col-span-2 flex items-start max-w-lg", {
									"md:justify-self-end": !isEven
								})}
							>
								<div className="flex items-center justify-center h-20 w-20 flex-shrink-0 rounded-full bg-indigo-100 text-indigo-500">
									<Icon className="h-8 w-8" aria-hidden="true" />
								</div>

								<div
									className={cn("flex flex-col", {
										'ml-6 md:mr-6 md:order-first md:text-right': !isEven,
										'ml-6': isEven,
									})}
								>
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
