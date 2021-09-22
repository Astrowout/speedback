import { forwardRef, FunctionComponent, RefObject } from 'react';
import cn from "classnames";
import { ChangeHandler } from 'react-hook-form';

type InputProps = {
	name: string,
	label?: string,
	type?: string,
	className?: string,
	placeholder?: string,
	autocomplete?: string,
	error?: string,
	onChange?: ChangeHandler,
	onBlur?: ChangeHandler,
}

const Input: FunctionComponent<InputProps> = forwardRef(({ onChange, onBlur, name, error, className, type = "text", autocomplete, label, placeholder }, ref) => {
	return (
		<div className={cn(className)}>
			{label && (
				<label htmlFor={name} className="block text-sm text-gray-600">
					{label}
				</label>
			)}

			<input
				type={type}
				id={name}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				ref={ref as RefObject<HTMLInputElement>}
				autoComplete={autocomplete || name}
				placeholder={placeholder}
				className={cn("mt-1 py-3 px-4 block focus:ring-1 focus:outline-none w-full shadow rounded-md", {
					'focus:ring-red-500': error,
					'focus:ring-indigo-500': !error,
				})}
			/>

			{error === 'required' && (
				<p className="text-red-500 text-sm mt-1.5 text-right"><span className="capitalize">{label || name}</span> is required</p>
			)}

			{error === 'pattern' && (
				<p className="text-red-500 text-sm mt-1.5 text-right">This field doesn&apos;t seem right. Please check again.</p>
			)}
		</div>
	)
});

Input.displayName = "Input"

export default Input;