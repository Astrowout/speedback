import { FunctionComponent, useContext } from 'react';
import { useForm } from 'react-hook-form';
import cn from "classnames";
import Router from 'next/router';
import { useMutation } from '@apollo/client';
import { LinkIcon } from '@heroicons/react/outline';

import { Input } from '../index';
import { Mutations, Queries } from '../../helpers';
import { AuthContext } from '../../context';

interface IFormValues {
	name: string;
	url: string;
	description?: string;
}

type NewProjectFormProps = {
	className?: string,
	id?: string,
	data?: IFormValues,
}

const NewProjectForm: FunctionComponent<NewProjectFormProps> = ({ className, id, data = {} }) => {
	const { user } = useContext(AuthContext);
	const [upsertProject, { loading, error }] = useMutation(Mutations.upsertProject);
	const [publishProject] = useMutation(Mutations.publishProject);
	const { register, handleSubmit, reset, formState: { errors: formErrors } } = useForm<IFormValues>({
		defaultValues: data
	});

	const onSubmit = async (data: IFormValues) => {
		const { data: { upsertProject: project } } = await upsertProject({
			variables: { issuer: user.issuer, id, ...data },
			refetchQueries: [Queries.getProject]
		});
		await publishProject({ variables: { id: project.id } });


		if (id) {
			Router.push(`/projects/${id}`);
		} else {
			Router.push("/projects");
			reset();
		}
	}

	return (
		<form className={cn(className, "space-y-10")} onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-6">
				<Input
					type="text"
					placeholder="My new project"
					{...register("name", {
						required: true,
					})}
					label="Project name"
					error={formErrors.name?.type}
				/>

				<Input
					type="text"
					placeholder="https://test.myproject.com"
					{...register("url", {
						required: true,
						pattern: /^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
					})}
					label="Test / staging domain"
					error={formErrors.url?.type}
					icon={LinkIcon}
				/>

				<Input
					type="textarea"
					placeholder="About my project"
					{...register("description")}
					label="Description"
					error={formErrors.description?.type}
				/>
			</div>

            <div className="space-y-3">
				<button
					type="submit"
					disabled={loading}
					className="relative w-full disabled:opacity-30 disabled:pointer-events-none flex justify-center py-3 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					{id ? 'Edit project' : 'Create project'}
				</button>

				{error && (
					<p className="text-red-500 text-sm">
						{error.message}
					</p>
				)}
			</div>
        </form>
	)
}

export default NewProjectForm;
