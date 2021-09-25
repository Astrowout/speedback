import Head from 'next/head';
import Link from 'next/link';
import Router from "next/router";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CollectionIcon, EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { ConfirmDeleteModal, EmptyState, Heading, ProjectDataDisplay, Snippet } from '../../../components';
import { AppLayout } from '../../../layouts';
import { ApolloClient, Mutations, Queries } from '../../../helpers';

const AppProjectDetail: NextPage = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [deleteProject] = useMutation(Mutations.deleteProject, {
		variables: { id: project.id },
	});

	const handleDeleteProject = async (): Promise<void> => {
		setIsConfirmModalOpen(false);

		await deleteProject();

		Router.push("/projects");
	}

	return (
		<AppLayout>
			<Head>
				<title>{project?.name || "Your project"} - speedback</title>
			</Head>

			<main>
				<Heading title={project?.name || "Your project"} backLink={{ url: "/projects", label: "Back to projects" }}>
					<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
						<button
							type="button"
							onClick={() => setIsConfirmModalOpen(true)}
							className="my-1.5 mx-2 disabled:pointer-events-none disabled:opacity-30 inline-flex items-center px-4 py-2 border border-red-200 rounded shadow-sm text-sm font-medium text-red-500 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							<TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
							Delete project
						</button>

						<Link
							href={`/projects/${project.id}/edit`}
						>
							<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<PencilIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
								Edit project
							</a>
						</Link>
					</div>
				</Heading>

				<section className="2xl:container container-spacing section-spacing">
					{project ? (
						<div className="flex flex-col gap-8">
							<ProjectDataDisplay className="max-w-3xl" data={project}></ProjectDataDisplay>

							<Snippet id={project.id} />
						</div>
					) : (
						<EmptyState title="This project was not found." icon={CollectionIcon}>
							<Link
								href="/projects"
							>
								<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<EyeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
									View all projects
								</a>
							</Link>
						</EmptyState>
					)}
				</section>
			</main>

			<ConfirmDeleteModal
				title={`Deleting "${project.name}"`}
				description="Are you sure you want to delete this project? This action cannot be reversed."
				action={handleDeleteProject}
				closeAction={setIsConfirmModalOpen}
				isOpen={isConfirmModalOpen}
			/>
		</AppLayout>
	)
}

export const getStaticPaths = async () => {
	const { data: { projects } } = await ApolloClient.query({
		query: Queries.getProjects,
	});

	const paths = projects.map((project: any) => ({
		params: { id: project.id },
	}));

	return {
	  paths,
	  fallback: 'blocking'
	};
}

export const getStaticProps: GetStaticProps = async({ params }) => {
	const { data: { project } } = await ApolloClient.query({
		query: Queries.getProject,
		variables: { id: params?.id }
	});

	return {
		props: {
			project,
		},
		revalidate: 10, // In seconds
	}
}

export default AppProjectDetail;
