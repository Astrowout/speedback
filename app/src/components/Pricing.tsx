import { FunctionComponent } from 'react';
import { CheckIcon, ClockIcon } from '@heroicons/react/outline';

import Button from './Button';

interface IPricing {
	id: string;
	title: string;
	description: string;
}

type PricingProps = {
	eyebrow: string;
	monthlyCost: number;
	yearlyCost: number;
	title: string;
	description?: string;
}

const Pricing: FunctionComponent<PricingProps> = ({ monthlyCost, yearlyCost, eyebrow, title, description }) => {
	// const [yearly, setYearly] = useState<boolean>(true);

	return (
		<div id="pricing" className="py-16 lg:py-32 bg-indigo-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
				<div className="text-center">
					<h2 className="text-indigo-500 font-bold text-sm tracking-wider uppercase">
						{eyebrow}
					</h2>

					<p className="mt-2 font-brand text-gray-900 text-3xl leading-tight lg:text-5xl lg:leading-tight">
						{title}
					</p>

					<p className="mt-4 max-w-prose mx-auto text-gray-500">
						{description}
					</p>
				</div>

				{/* <Toggle enabled={yearly} setEnabled={setYearly} label="Paid yearly" className="mt-16" /> */}

				<div className="mt-10 flex flex-col md:flex-row md:mx-auto max-w-full self-stretch">
					<div className="relative md:w-96 px-8 py-12 md:p-8 bg-white text-center rounded-t md:rounded shadow-xl">
						<h3 className="text-gray-900 font-brand text-3xl">
							Single project
						</h3>

						<p className="pt-2">
							<span className="text-2xl text-gray-400 font-bold">
								free
							</span>
						</p>

						<hr className="mt-4" />

						<div className="pt-8">
							<p className="flex text-gray-600 text-left">
								<CheckIcon aria-hidden="true" className="mt-0.5 w-5 h-5 text-indigo-500" />

								<span className="pl-2">
									Get started with one project
								</span>
							</p>

							<p className="flex text-gray-600 text-left pt-5">
								<CheckIcon aria-hidden="true" className="mt-0.5 w-5 h-5 text-indigo-500" />

								<span className="pl-2">
									Gather feedback on any website
								</span>
							</p>

							<p className="flex text-gray-600 text-left pt-5">
								<CheckIcon aria-hidden="true" className="mt-0.5 w-5 h-5 text-indigo-500" />

								<span className="pl-2">
									All bugs in the right place
								</span>
							</p>

							<p className="flex text-gray-400 text-left pt-5">
								<ClockIcon aria-hidden="true" className="mt-0.5 w-5 h-5 text-indigo-300" />

								<span className="pl-2">
									Integrate with your favourite tools (coming soon)
								</span>
							</p>

							<Button
								url="/login"
								compact={false}
								fluid
								className="mt-8"
							>
								Get started for free
							</Button>
						</div>

						<div className="absolute top-4 -left-1">
							<p className="bg-indigo-500 font-bold text-white text-xs px-3 py-1 rounded uppercase tracking-wider">Preview</p>
						</div>
					</div>

					{/* <div className="md:w-80 p-8 bg-gray-900 text-center flex flex-col rounded-b md:rounded text-white shadow-xl">
						<h3 className="text-white font-brand text-3xl">
							Premium
						</h3>

						<p className="pt-2">
							<span className="text-gray-400 align-top">€ </span>

							<span className="text-3xl font-bold">
								{yearly ? yearlyCost : monthlyCost}{" "}
							</span>

							<span className="text-lg text-gray-400">
								Coming soon...
							</span>

							<span className="text-gray-400">
								/ month
							</span>
						</p>

						<hr className="mt-4 border-gray-600" />

						<div className="pt-8 flex-grow flex flex-col justify-between">
							<div>
								<p className="flex text-gray-300 text-left">
									<CheckIcon aria-hidden="true" className="mt-0.5 w-5 h-5 text-indigo-300" />
									<span className="pl-2">
										All features from the free plan
									</span>
								</p>

								<p className="flex text-gray-300 text-left pt-5">
									<CheckIcon aria-hidden="true" className="mt-0.5 w-5 h-5 text-indigo-300" />
									<span className="pl-2">
										Unlimited projects
									</span>
								</p>

								<p className="flex text-gray-300 text-left pt-5">
									<CheckIcon aria-hidden="true" className="mt-0.5 w-5 h-5 text-indigo-300" />
									<span className="pl-2">
										Unlimited users (coming soon)
									</span>
								</p>

								<p className="flex text-gray-300 text-left pt-5">
									<CheckIcon aria-hidden="true" className="mt-0.5 w-5 h-5 text-indigo-300" />
									<span className="pl-2">
										User roles (coming soon)
									</span>
								</p>
							</div>

							<div className="mt-4 cursor-not-allowed">
								<Button
									url="/login"
									compact={false}
									fluid
									disabled
								>
									Not yet available
								</Button>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Pricing;
