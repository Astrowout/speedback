import { ElementType, forwardRef } from 'react';
import { ForwardRefComponent } from 'framer-motion';
import Link from 'next/link';
import cn from "classnames";

type ButtonProps = {
	url?: string,
	className?: string,
	type?: "button" | "submit" | "reset" | undefined,
	onClick?: () => void,
	danger?: boolean,
	disabled?: boolean,
	secondary?: boolean,
	compact?: boolean,
	fluid?: boolean,
	icon?: ElementType,
}

const Button: ForwardRefComponent<ButtonProps, any> = forwardRef<any, ButtonProps>(({
	className,
	children,
	onClick,
	url,
	type = "button",
	disabled = false,
	fluid = false,
	danger = false,
	secondary = false,
	compact = true,
	icon
}, ref) => {
	const Icon = icon;

	const classes = cn(className, "inline-flex items-center whitespace-nowrap justify-center group transition-colors rounded-lg shadow-lg shadow-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50", {
		"text-white bg-indigo-500 hover:bg-indigo-700": !secondary && !danger,
		"border border-gray-300 text-gray-800 bg-white hover:bg-gray-100": secondary,
		"border border-red-300 text-red-600 focus:ring-red-500 bg-white hover:bg-red-50": danger,
		"w-full": fluid,
		"px-6 py-4": !compact,
		"px-4 py-2 text-sm": compact,
		"pointer-events-none opacity-50": disabled
	});

	const renderContent = () => (
		<>
			{icon && Icon && <Icon className="-ml-1 mr-2 h-5 w-5 transition-transform group-hover:scale-90" aria-hidden="true" />}
			{children}
		</>
	)

	return url ? (
		<Link
			href={url}
			ref={ref as any}
			className={classes}
		>
			{renderContent()}
		</Link>
	) : (
		<button
			ref={ref as any}
			type={type}
			disabled={disabled}
			className={classes}
			onClick={onClick}
		>
			{renderContent()}
		</button>
	);
});

export default Button;
