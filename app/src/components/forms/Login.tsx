"use client";

import { LockClosedIcon } from '@heroicons/react/outline';
import { FunctionComponent, useContext } from 'react';
import { useForm } from 'react-hook-form';
import cn from "classnames";

import { Input } from '../index';
import { AuthContext } from '../../context';

type LoginFormProps = {
	className?: string,
}

type FormValues = {
	email: string;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({ className }) => {
	const { isLoading, methods } = useContext(AuthContext);
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		await methods.loginWithEmail(data.email);
	}

	return (
		<form className={cn(className, "space-y-4")} onSubmit={handleSubmit(onSubmit)}>
			<Input
				type="email"
				placeholder="Enter your email"
				{...register("email", {
					required: true,
					pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
				})}
				autocomplete="on"
				error={errors.email?.type}
			/>

            <button
				type="submit"
				disabled={isLoading}
				className="relative w-full disabled:opacity-30 disabled:pointer-events-none flex justify-center py-3 px-4 border border-transparent rounded text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
				<LockClosedIcon className="absolute left-0 top-1/2 transform -translate-y-1/2 inset-y-0 ml-3 h-5 w-5 text-indigo-400" aria-hidden="true" />
				Sign in
            </button>
        </form>
	)
}

export default LoginForm;
