import { FunctionComponent } from 'react';
import {
	CalendarIcon,
	CreditCardIcon,
	ChatAltIcon,
} from '@heroicons/react/outline';

import { DateUtils } from "../helpers";
import { PricingPlan } from '../enums';

// Types
type HeadingStats = {
	pricingPlan?: PricingPlan,
	commentCount?: number,
	lastCommentDate?: Date,
}

type HeadingProps = {
	title: string,
	stats?: HeadingStats,
}

const Heading: FunctionComponent<HeadingProps> = ({ children, title, stats }) => {
	return (
		<section className="shadow-md bg-white">
			<div className="2xl:container section-spacing container-spacing lg:flex lg:items-center lg:justify-between">
				<div className="flex-1 min-w-0">
					<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl sm:truncate">
						{title}
					</h2>

					{stats && (
						<div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<ChatAltIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
								<strong>{stats.commentCount || 0}</strong>&nbsp;comments
							</div>

							<div className="mt-2 flex items-center text-sm text-gray-500">
								<CreditCardIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
								<strong className="capitalize">{stats.pricingPlan || PricingPlan.free}</strong>&nbsp;plan
							</div>

							{stats.lastCommentDate && (
								<div className="mt-2 flex items-center text-sm text-gray-500">
									<CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
									Last comment:&nbsp;<strong>{DateUtils.formatRelative(stats.lastCommentDate)}</strong>
								</div>
							)}
						</div>
					)}
				</div>

				{children}
			</div>
	  	</section>
	)
}

export default Heading;