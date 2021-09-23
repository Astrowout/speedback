import Head from 'next/head';
import Link from 'next/link';
import Router from "next/router";
import { useMutation } from '@apollo/client';
import { CollectionIcon, EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

import { AppScript, EmptyState, Heading, ProjectDataDisplay } from '../../../components';
import { AppLayout } from '../../../layouts';
import { ApolloClient, Mutations, Queries } from '../../../helpers';

const AppProjectDetail: NextPage = ({ project, id }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [deleteProject, { loading }] = useMutation(Mutations.deleteProject, {
		variables: { id },
	});

	const handleDeleteProject = async (): Promise<void> => {
		await deleteProject();

		Router.push("/projects");
	}

	return (
		<AppLayout>
			<Head>
				<title>{project?.name || "Your project"} - speedback</title>
			</Head>

			<main>
				<Heading title={project?.name || "Your project"}>
					<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
						<button
							type="button"
							onClick={handleDeleteProject}
							disabled={loading}
							className="my-1.5 mx-2 disabled:pointer-events-none disabled:opacity-30 inline-flex items-center px-4 py-2 border border-red-200 rounded-md shadow-sm text-sm font-medium text-red-500 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							<TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
							Delete project
						</button>

						<Link
							href={`/projects/${project.id}/edit`}
						>
							<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<PencilIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
								Edit project
							</a>
						</Link>
					</div>
				</Heading>

				<section className="2xl:container container-spacing section-spacing">
					{project ? (
						<>
							<ProjectDataDisplay className="max-w-3xl" data={project}></ProjectDataDisplay>

							<AppScript />
						</>
					) : (
						<EmptyState title="This project was not found." icon={CollectionIcon}>
							<Link
								href="/projects"
							>
								<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<EyeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
									View all projects
								</a>
							</Link>
						</EmptyState>
					)}
				</section>
			</main>
		</AppLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async({ params }) => {
	const { data: { project } } = await ApolloClient.query({
		query: Queries.getProject,
		variables: { id: params?.id }
	});

	return {
		props: {
			project,
			id: params?.id
		},
	}
  }

export default AppProjectDetail;
