import { ElementType, FunctionComponent } from 'react';
import { ExclamationIcon } from '@heroicons/react/outline';

// Types
type EmptyStateProps = {
	title: string,
	icon: ElementType,
}

const EmptyState: FunctionComponent<EmptyStateProps> = ({ children, title, icon = ExclamationIcon }) => {
	const Icon = icon;

	return (
		<div className="flex flex-col items-center container-spacing section-spacing">
			<div className="flex flex-col items-center space-y-3 max-w-md">
				<Icon className="block h-16 w-16 text-gray-400" aria-hidden="true" />

				<p className="text-gray-600 text-center font-bold">
					{title}
				</p>
			</div>

			{children}
	  	</div>
	)
}

export default EmptyState;
