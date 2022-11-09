import Head from 'next/head';
import Router from "next/router";
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CollectionIcon, EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { ConfirmDeleteModal, EmptyState, Heading, ProjectDataDisplay, Snippet, Comments, Loader, Button } from '../../../../components';
import { AppLayout } from '../../../../layouts';
import { ApolloClient, Mutations, Queries } from '../../../../helpers';

const AppProjectDetail: NextPage = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { loading, data } = useQuery(Queries.getProject, {
		variables: { id },
		fetchPolicy: "network-only",
	});
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [deleteProject] = useMutation(Mutations.deleteProject, {
		variables: { id },
		onCompleted: () => {
			Router.push("/app/projects");
		}
	});

	const handleDeleteProject = (): void => {
		setIsConfirmModalOpen(false);

		deleteProject();
	}

	return (
		<AppLayout>
			<Head>
				<title>{data?.project?.name || "Unknown project"} - speedback</title>
			</Head>

			<main>
				<Heading title={data?.project?.name || "Unknown project"} backLink={{ url: "/app/projects", label: "Back to projects" }}>
					{data?.project && (
						<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
							<Button
								type="button"
								onClick={() => setIsConfirmModalOpen(true)}
								icon={TrashIcon}
								danger
								className="my-1.5 mx-2"
							>
								Delete project
							</Button>

							<Button
								url={`/app/projects/${data?.project?.id}/edit`}
								icon={PencilIcon}
								className="my-1.5 mx-2"
							>
								Edit project
							</Button>
						</div>
					)}
				</Heading>

				{loading ? (
					<Loader />
				) : (
					<section className="2xl:container container-spacing section-spacing">
						{data?.project ? (
							<div className="grid grid-cols-12 gap-x-8 gap-y-12 items-start">
								<Comments className="col-span-12 md:col-span-7" projectId={data.project.id} comments={data.project.comments} />

								<ProjectDataDisplay className="max-w-xl col-span-12 md:col-span-5" data={data.project}></ProjectDataDisplay>

								<Snippet className="col-span-12" id={data.project.id} />
							</div>
						) : (
							<EmptyState title="This project was not found." icon={CollectionIcon}>
								<Button
									url="/app/projects"
									icon={EyeIcon}
									className="mt-8"
									secondary
								>
									View all projects
								</Button>
							</EmptyState>
						)}
					</section>
				)}
			</main>

			<ConfirmDeleteModal
				title={`Deleting "${data?.project?.name}"`}
				description="Are you sure you want to delete this project? This action cannot be undone."
				action={handleDeleteProject}
				closeAction={setIsConfirmModalOpen}
				isOpen={isConfirmModalOpen}
			/>
		</AppLayout>
	)
}

export const getStaticPaths = async () => {
	const { data: { projects } } = await ApolloClient.query({
		query: Queries.getAllProjects,
	});

	const paths = projects.map((project: any) => ({
		params: { id: project.id },
	}));

	return {
		paths,
		fallback: 'blocking'
	};
}

export const getStaticProps: GetStaticProps = ({ params }) => {
	return {
		props: {
			id: params?.id,
		},
	}
}

export default AppProjectDetail;
