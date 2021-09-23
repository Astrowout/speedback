import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import cn from "classnames";
import { useMutation } from '@apollo/client';

import { Input } from '../index';
import { Mutations } from '../../helpers';

type NewProjectFormProps = {
	className?: string,
}

type FormValues = {
	name: string;
	email: string;
}

const NewProjectForm: FunctionComponent<NewProjectFormProps> = ({ className }) => {
	const [createProject, { loading: isLoading, data }] = useMutation(Mutations.createProject);
	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		await createProject({ variables: data });
	}

	return (
		<form className={cn(className, "space-y-4")} onSubmit={handleSubmit(onSubmit)}>
			<Input
				type="text"
				placeholder="My new project"
				{...register("name", {
					required: true,
				})}
				label="Project name"
				error={errors.name?.type}
			/>

			<Input
				type="text"
				placeholder="My new project"
				{...register("name", {
					required: true,
				})}
				label="Project name"
				error={errors.name?.type}
			/>

            <button
				type="submit"
				disabled={isLoading}
				className="relative w-full disabled:opacity-30 disabled:pointer-events-none flex justify-center py-3 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
				Start my project
            </button>
        </form>
	)
}

export default NewProjectForm;
