import { FunctionComponent } from 'react';
import * as heroIcons from "@heroicons/react/outline";

// Types
type EmptyStateProps = {
	title: string,
	icon?: keyof typeof heroIcons,
}

const EmptyState: FunctionComponent<EmptyStateProps> = ({ children, title, icon = "ArrowRightIcon" }) => {
	const Icon = heroIcons[icon];

	return (
		<div className="flex flex-col items-center space-y-8 container-spacing section-spacing">
			<div className="flex flex-col items-center space-y-3 max-w-md">
				<Icon className="block h-16 w-16 text-gray-400" aria-hidden="true" />

				<p className="text-gray-600 text-center font-bold">
					{title}
				</p>
			</div>

			<div>{children}</div>
	  	</div>
	)
}

export default EmptyState;