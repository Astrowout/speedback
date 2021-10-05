import { FunctionComponent } from 'react';
import * as HeroIcons from '@heroicons/react/outline';

interface IFeature {
	id: string;
	title: string;
	description: string;
	icon: keyof typeof HeroIcons;
}

type ForWhomProps = {
	eyebrow: string;
	title: string;
	description?: string;
}

const ForWhom: FunctionComponent<ForWhomProps> = ({ eyebrow, title, description }) => {
	return (
		<div id="for-whom" className="py-16 border-t lg:py-32 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

				<div className="mt-12 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-20">
					content
				</div>
			</div>
		</div>
	)
}

export default ForWhom;
