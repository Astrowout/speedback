import { ElementType, forwardRef, FunctionComponent, RefObject } from 'react';
import cn from "classnames";
import { ChangeHandler } from 'react-hook-form';

type InputProps = {
	name: string,
	label?: string,
	type?: string,
	className?: string,
	placeholder?: string,
	icon?: ElementType,
	autocomplete?: string,
	error?: string,
	onChange?: ChangeHandler,
	onBlur?: ChangeHandler,
}

const Input: FunctionComponent<InputProps> = forwardRef(({
	onChange,
	onBlur,
	name,
	error,
	className,
	type = "text",
	autocomplete,
	icon = null,
	label,
	placeholder
}, ref) => {
	const Icon = icon;

	return (
		<div className={cn(className)}>
			{label && (
				<label htmlFor={name} className="block text-sm text-gray-600">
					{label}
				</label>
			)}

			<div className="relative">
				{type === 'textarea' ? (
					<textarea
						id={name}
						name={name}
						onChange={onChange}
						onBlur={onBlur}
						ref={ref as RefObject<HTMLTextAreaElement>}
						placeholder={placeholder}
						rows={4}
						className={cn("mt-1 py-3 px-4 block focus:ring-1 focus:outline-none w-full shadow rounded", {
							'focus:ring-red-500': error,
							'focus:ring-indigo-500': !error,
							'pl-16': icon
						})}
					/>
				) : (
					<input
						type={type}
						id={name}
						name={name}
						onChange={onChange}
						onBlur={onBlur}
						ref={ref as RefObject<HTMLInputElement>}
						autoComplete={autocomplete || name}
						placeholder={placeholder}
						className={cn("mt-1 py-3 px-4 block focus:ring-1 focus:outline-none w-full shadow rounded", {
							'focus:ring-red-500': error,
							'focus:ring-indigo-500': !error,
							'pl-16': icon
						})}
					/>
				)}

				{icon && Icon && (
					<div className="divide-x pointer-events-none divide-gray-200 flex h-full space-x-3 absolute left-8 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
						<Icon className="text-gray-600 block w-5 h-5 self-center" aria-hidden="true" />

						<span></span>
					</div>
				)}
			</div>

			{error === 'required' && (
				<p className="text-red-500 text-sm mt-1.5 text-right"><span className="first-letter:uppercase">{label || name}</span> is required</p>
			)}

			{error === 'pattern' && (
				<p className="text-red-500 text-sm mt-1.5 text-right">This field doesn&apos;t seem right. Please check again.</p>
			)}
		</div>
	)
});

Input.displayName = "Input"

export default Input;
