import { FunctionComponent } from 'react';
import {
	CalendarIcon,
	ChatAltIcon,
} from '@heroicons/react/outline';

import { DateUtils } from "../helpers";
import { Stat } from './index';

type HeadingStats = {
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
							<Stat icon={ChatAltIcon} className="mt-2">
								<strong>{stats.commentCount || 0}</strong>&nbsp;comments
							</Stat>

							{stats.lastCommentDate && (
								<Stat icon={CalendarIcon} className="mt-2">
									Last comment:&nbsp;<strong>{DateUtils.formatRelative(stats.lastCommentDate)}</strong>
								</Stat>
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
