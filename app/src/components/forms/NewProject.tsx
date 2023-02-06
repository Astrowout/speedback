"use client";

import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import cn from "classnames";
import Router from 'next/router';
import { LinkIcon } from '@heroicons/react/outline';

import { Input } from '../index';
import { Mutations } from '../../helpers';
import { AuthContext } from '../../context';
import Button from '../Button';
import client from '../../helpers/graphql-client';

interface IFormValues {
	name: string;
	url: string;
	description?: string;
}

type NewProjectFormProps = {
	className?: string,
	id?: string,
	data?: IFormValues | {},
}

const NewProjectForm: FunctionComponent<NewProjectFormProps> = ({ className, id, data = {} }) => {
	const { user } = useContext(AuthContext);
	const [error, setError] = useState<{ message: string } | null>(null);
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, reset, formState: { errors: formErrors } } = useForm<IFormValues>({
		defaultValues: data
	});

	const onSubmit = async (data: IFormValues) => {
		setLoading(true);

		try {
			const { data: { upsertProject: project } } = await client.mutate(Mutations.upsertProject, {
				issuer: user.issuer,
				id,
				...data,
			});

			await client.mutate(Mutations.publishProject, {
				id: project.id,
			});

			Router.push(`/app/projects/${project.id}`);
		} catch (err: any) {
			setError({
				message: err.message,
			});
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		return () => {
			reset();
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<form className={cn(className, "space-y-6 mx-auto")} onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-4">
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
				<Button
					type="submit"
					disabled={loading}
					fluid
					compact={false}
				>
					{id ? 'Edit project' : 'Create project'}
				</Button>

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
