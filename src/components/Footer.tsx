import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IVisual {
	url: string;
}

type FooterProps = {
	title: string;
	description: string;
	visual: IVisual;
}

const Footer: FunctionComponent<FooterProps> = ({ title, description, visual }) => {
	return (
		<footer className="border-t-2">
			<div className="max-w-screen-xl mx-auto container-spacing flex space-x-8 items-end lg:items-center">
				<div className="py-12 pb-64 md:pb-40 lg:py-32 max-w-lg flex flex-col items-start relative z-10">
					<h1 className="font-brand text-gray-900 text-4xl leading-tight md:text-5xl md:leading-tight xl:text-6xl xl:leading-tight">
						{title}
					</h1>
					<p className="mt-2 text-gray-500">
						{description}
					</p>
				</div>
				<div aria-hidden="true" className="max-w-xs pointer-events-none">
					<Image src={visual.url} alt="image" width="1628" height="1165" />
				</div>
			</div>
		</footer>
	)
}

export default Footer;
