import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from "next";
import { useQuery } from "@apollo/client";

import { Heading, EmptyState, ProjectsTable, Loader } from '../components';
import { AppLayout } from '../layouts';
import { PlusIcon, EyeIcon, CollectionIcon } from '@heroicons/react/outline';
import { Queries } from '../helpers';

const AppIndex: NextPage = () => {
	const { data, loading } = useQuery(Queries.getProjects);

	return (
		<AppLayout>
			<Head>
				<title>My dashboard - speedback</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Heading
					title="My dashboard"
					stats={{
						commentCount: 53,
						lastCommentDate: new Date(),
					}}
				>
					<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
						<Link
							href="/projects"
						>
							<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<EyeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
								View projects
							</a>
						</Link>

						<Link
							href="/projects/create"
						>
							<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
								Create a new project
							</a>
						</Link>
					</div>
				</Heading>

				<section className="2xl:container container-spacing section-spacing">
					{loading ? (
						<Loader />
					) : data.projects?.length ? (
						<ProjectsTable className="max-w-3xl" rows={data.projects} compact></ProjectsTable>
					) : (
						<EmptyState title="No projects found." icon={CollectionIcon}>
							<Link
								href="/projects/create"
							>
								<a className="mt-8 my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
									Create a new project
								</a>
							</Link>
						</EmptyState>
					)}
				</section>
			</main>
		</AppLayout>
	)
}

export default AppIndex;
