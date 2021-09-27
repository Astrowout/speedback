import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from "next";
import { CollectionIcon, PlusIcon } from '@heroicons/react/outline';
import { useQuery } from '@apollo/client';

import { EmptyState, Heading, Loader, ProjectsTable } from '../../components';
import { AppLayout } from '../../layouts';
import { Queries } from '../../helpers';

const AppProjects: NextPage = () => {
	const { data, loading } = useQuery(Queries.getProjects);

	return (
		<AppLayout>
			<Head>
				<title>Projects - speedback</title>
			</Head>

			<main>
				<Heading title="Projects">
					<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
						<Link
							href="/projects/create"
						>
							<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
						<ProjectsTable rows={data.projects}></ProjectsTable>
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

export default AppProjects;
