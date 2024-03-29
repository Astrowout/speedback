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
	className = "",
	onChange,
	onBlur,
	name = "",
	error,
	type = "text",
	autocomplete,
	icon = null,
	label = "",
	placeholder = "",
}, ref) => {
	const Icon = icon;

	return (
		<div className={cn(className)}>
			{label && (
				<label htmlFor={name} className="block text-gray-500">
					{label}
				</label>
			)}

			{error && (
				<p className="text-red-500 text-sm mb-1.5">
					{error === 'required' && (
						<><span className="capitalize">{label || name}</span> is required</>
					)}
					{error === 'pattern' && (
						<>This field doesn&apos;t seem right. Please check again.</>
					)}
				</p>
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
		</div>
	)
});

Input.displayName = "Input"

export default Input;
