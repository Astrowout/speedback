
import { ElementType, FunctionComponent } from 'react';
import cn from "classnames";
import { ClipboardCopyIcon } from '@heroicons/react/outline';

type AppScriptProps = {
	className?: string,
}

const AppScript: FunctionComponent<AppScriptProps> = ({ children, className }) => {
	return (
		<div className={cn(className, "mt-2 flex items-center text-sm text-gray-500")}>
			<ClipboardCopyIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
			{children}
		</div>
	)
}

export default AppScript;
