import { FunctionComponent } from 'react';
import Link from 'next/link';

import { Logo, Version } from './index';

const navigation = [
	{
		label: "How does it work?",
		url: '/',
		anchor: "#features",
	},
	{
		label: "For whom",
		url: '/',
		anchor: "#for-whom",
	},
	{
		label: "Pricing",
		url: '/',
		anchor: "#pricing",
	},
]

const legalNavigation = [
	{
		label: "Privacy policy",
		url: "/privacy-policy",
	},
	{
		label: "Cookies",
		url: "/cookies",
	},
]

type FooterProps = {
	description: string;
}

const Footer: FunctionComponent<FooterProps> = ({ description }) => {
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

						{/* <Socials instaLabel="Follow our process" /> */}
					</div>

					<div className="flex space-x-16 sm:space-x-32 flex-shrink-0">
						<div className="flex flex-col items-start space-y-4">
							<h4 className="font-brand text-xl">
								Product
							</h4>

							<ul className="flex flex-col items-start space-y-2">
								{navigation.map(item => (
									<li key={item.anchor}>
										<Link
											href={item.url + item.anchor}
											className="text-gray-600 hover:underline"
										>
											{item.label}
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
										<Link
											href={item.url}
											className="text-gray-600 hover:underline"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
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
