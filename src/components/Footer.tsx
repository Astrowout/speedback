import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Logo, Version, Socials } from './index';

const navigation = [
	{
		label: "How does it work?",
		anchor: "#features",
	},
	{
		label: "For whom",
		anchor: "#for-whom",
	},
	{
		label: "Pricing",
		anchor: "#pricing",
	},
]

const legalNavigation = [
	{
		label: "For whom",
		url: "/privacy-policy",
	},
	{
		label: "Pricing",
		url: "/cookies",
	},
]

interface IVisual {
	url: string;
	width: number;
	height: number;
}

type FooterProps = {
	description: string;
	visual: IVisual;
}

const Footer: FunctionComponent<FooterProps> = ({ visual, description }) => {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t-2 pt-16 lg:pt-24">
			<div className="max-w-screen-xl mx-auto container-spacing">
				<div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-16 justify-between pb-8">
					<div className="flex flex-col items-start space-y-6 md:max-w-xs">
						<Logo />

						<p className="text-gray-600">
							{description}
						</p>

						<Socials instaLabel="Follow our process" />
					</div>

					<div className="flex space-x-20 sm:space-x-32 flex-shrink-0">
						<div className="flex flex-col items-start space-y-4">
							<h4 className="font-brand text-xl">
								Product
							</h4>

							<ul className="flex flex-col items-start space-y-2">
								{navigation.map(item => (
									<li key={item.anchor}>
										<Link href={item.anchor}>
											<a className="text-gray-600 hover:underline">{item.label}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="flex flex-col items-start space-y-4">
							<h4 className="font-brand text-xl">
								Legal
							</h4>

							<ul className="flex flex-col items-start space-y-2">
								{legalNavigation.map(item => (
									<li key={item.url}>
										<Link href={item.url}>
											<a className="text-gray-600 hover:underline">{item.label}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div aria-hidden="true" className="hidden lg:block flex-shrink max-w-xs pointer-events-none">
						<Image src={visual.url} alt="image" width={visual.width} height={visual.height} />
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between pt-4 md:pt-0 border-t">
					<p className="text-center text-sm text-gray-400">
						Copyright © {year} speedback. All rights reserved.
					</p>

					<Version version="beta" />
				</div>
			</div>
		</footer>
	)
}

export default Footer;
