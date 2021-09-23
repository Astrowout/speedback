import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from "next";
import { PlusIcon } from '@heroicons/react/outline';
import { useQuery } from '@apollo/client';

import { EmptyState, Heading, Loader, ProjectsTable } from '../components';
import { PlatformLayout } from '../layouts';
import { Queries } from '../helpers';

const AppProjects: NextPage = () => {
	const { data, loading, error } = useQuery(Queries.getProjects);

	return (
		<PlatformLayout>
			<Head>
				<title>Projects - speedback</title>
			</Head>

			<main>
				<Heading title="Projects">
					<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
						<Link
							href="/new-project"
						>
							<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
								Start a new project
							</a>
						</Link>
					</div>
				</Heading>

				<div className="2xl:container container-spacing section-spacing">
					{loading ? (
						<Loader />
					) : data && data.projects ? (
						<ProjectsTable rows={data.projects}></ProjectsTable>
					) : (
						<EmptyState title="No projects found." icon="CollectionIcon">
							<Link
								href="/new-project"
							>
								<a className="my-1.5 mx-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
									Start a new project
								</a>
							</Link>
						</EmptyState>
					)}
				</div>
			</main>
		</PlatformLayout>
	)
}

export default AppProjects;