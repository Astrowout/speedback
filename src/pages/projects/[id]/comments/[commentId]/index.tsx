
import Head from 'next/head';
import Link from 'next/link';
import Router from "next/router";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ChatAlt2Icon, ClipboardCopyIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { ConfirmDeleteModal, EmptyState, Heading } from '../../../../../components';
import { AppLayout } from '../../../../../layouts';
import { ApolloClient, Mutations, Queries } from '../../../../../helpers';

const AppCommentDetail: NextPage = ({ project, comment }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [resolveComment, { loading }] = useMutation(Mutations.resolveComment, {
		variables: { id: comment.id, resolved: !comment.resolved },
	});
	const [deleteComment] = useMutation(Mutations.deleteComment, {
		variables: { id: comment.id },
	});

	const handleResolveComment = async (): Promise<void> => {
		await resolveComment();
	}

	const handleDeleteComment = async (): Promise<void> => {
		setIsConfirmModalOpen(false);

		await deleteComment();
	}

	return (
		<AppLayout>
			<Head>
				<title>{project?.name ? `${project.name} - comment` : "Your project"} - speedback</title>
			</Head>

			<main>
				<Heading title={project?.name || "Your project"} backLink={{ url: `/projects/${project.id}`, label: "Back to projects" }}>
					<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
						<button
							type="button"
							onClick={() => setIsConfirmModalOpen(true)}
							className="my-1.5 mx-2 disabled:pointer-events-none disabled:opacity-30 inline-flex items-center px-4 py-2 border border-red-200 rounded shadow-sm text-sm font-medium text-red-500 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							<TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
							Delete comment
						</button>

						<Link
							href={`/projects/${project.id}/comments/${comment.id}/edit`}
						>
							<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<PencilIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
								Edit comment
							</a>
						</Link>
					</div>
				</Heading>

				<section className="2xl:container container-spacing section-spacing">
					{comment ? (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
							content
						</div>
					) : (
						<EmptyState title="No comments added in this project." icon={ChatAlt2Icon}>
							<div className="mt-2 flex flex-col space-y-6 items-center">
								<p className="text-sm text-center text-gray-400">
									Integrate the script in your website to start gathering feedback from your clients or customers.
								</p>
								<button
									type="button"
									data-clipboard-text={`<script src="${window.location.origin}/script/index.js?id=${project.id}" crossorigin charset="utf-8"></script>`}
									id="copyScriptTrigger"
									className="text-indigo-500 px-3 py-2 bg-indigo-100 rounded hover:bg-indigo-200 hover:text-indigo-800 flex items-center"
								>
									<ClipboardCopyIcon className="block h-5 w-5 mr-1" aria-hidden="true" />
									<span className="text-sm">Copy integration script</span>
								</button>
							</div>
						</EmptyState>
					)}
				</section>
			</main>

			<ConfirmDeleteModal
				title="Deleting comment"
				description="Are you sure you want to delete this project? This action cannot be reversed."
				action={handleDeleteComment}
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

	const { data: { comment } } = await ApolloClient.query({
		query: Queries.getComment,
		variables: { id: params?.commentId }
	});

	return {
		props: {
			comment,
			project
		},
		revalidate: 10, // In seconds
	}
}

export default AppCommentDetail;
