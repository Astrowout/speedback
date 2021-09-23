
import { ElementType, FunctionComponent } from 'react';
import cn from "classnames";

type StatProps = {
	icon: ElementType,
	className?: string,
}

const Stat: FunctionComponent<StatProps> = ({ children, className, icon }) => {
	const Icon = icon;

	return (
		<div className={cn(className, "mt-2 flex items-center text-sm text-gray-500")}>
			<Icon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
			{children}
		</div>
	)
}

export default Stat;
