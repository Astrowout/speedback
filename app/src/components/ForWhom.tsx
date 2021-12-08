import { FunctionComponent } from 'react';
import Image from "next/image";
import cn from "classnames";

interface IUsp {
	id: string;
	title: string;
	description: string;
}

interface IAudience {
	id: string;
	title: string;
	description: string;
	visual: any;
	usps: IUsp[];
}

type ForWhomProps = {
	eyebrow: string;
	title: string;
	audiences: IAudience[];
	description?: string;
}

const ForWhom: FunctionComponent<ForWhomProps> = ({ eyebrow, title, description, audiences = [] }) => {
	return (
		<div id="for-whom" className="py-16 border-t-2 border-indigo-100 lg:py-32 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

				{audiences.map((audience, i) => (
					<div key={audience.id} className="my-16 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-20 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								{audience.title}
							</h2>

							<p className="mt-4 text-lg text-gray-500">
								{audience.description}
							</p>

							{/* {audience.usps.map(usp => (
								<div key={usp.id} className="border-t border-gray-200 pt-4">
									<dt className="text-gray-900">{usp.title}</dt>
									<dd className="mt-2 text-sm text-gray-500">{usp.description}</dd>
								</div>
							))} */}
						</div>

						<div
							className={cn("rounded relative shadow-lg h-52 sm:h-64 md:h-80 overflow-hidden", {
								"order-first": i % 2
							})}
						>
							<Image
								src={audience.visual.url}
								alt={audience.title}
								objectFit="cover"
								layout="fill"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ForWhom;
