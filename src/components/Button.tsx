import { ElementType, FunctionComponent } from 'react';
import Link from 'next/link';
import cn from "classnames";

type ButtonProps = {
	url?: string,
	className?: string,
	danger?: boolean,
	dark?: boolean,
	compact?: boolean,
	icon?: ElementType,
	buttonProps?: HTMLButtonElement,
}

const Button: FunctionComponent<ButtonProps> = ({ className, children, url, dark = false, danger = false, compact = false, icon }) => {
	const Icon = icon;

	const renderContent = () => {
		{icon && Icon && <Icon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />}
		{children}
	}

	return (
			<Link
				href="/projects/create"
			>
				<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					{icon && Icon && <Icon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />}
					{children}
				</a>
			</Link>
	)
}

export default Button;
