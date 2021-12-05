import Head from 'next/head';
import { useContext } from 'react';
import type { NextPage } from "next";
import { CollectionIcon, PlusIcon } from '@heroicons/react/outline';
import { useQuery } from '@apollo/client';

import { Button, EmptyState, Heading, Loader, ProjectsTable } from '../../components';
import { AppLayout } from '../../layouts';
import { Queries } from '../../helpers';
import { AuthContext } from '../../context';

const AppProjects: NextPage = () => {
	const { user } = useContext(AuthContext);
	const { data, loading } = useQuery(Queries.getProjects, {
		variables: { issuer: user?.issuer },
		skip: !user,
		fetchPolicy: "cache-and-network"
	});

	return (
		<AppLayout>
			<Head>
				<title>Projects - speedback</title>
			</Head>

			<main>
				<Heading title="Projects">
					<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
						<Button
							url="/projects/create"
							disabled={!!data?.projects.length}
							icon={PlusIcon}
							className="my-1.5 mx-2"
						>
							{!data?.projects.length ? "Create a new project" : "Go premium to add more projects"}
						</Button>
					</div>
				</Heading>

				<section className="2xl:container container-spacing section-spacing">
					{loading ? (
						<Loader />
					) : data?.projects.length ? (
						<ProjectsTable rows={data.projects}></ProjectsTable>
					) : (
						<EmptyState title="No projects found." icon={CollectionIcon}>
							<Button
								url="/projects/create"
								disabled={!!data?.projects.length}
								icon={PlusIcon}
								className="mt-6"
							>
								{!data?.projects.length ? "Create a new project" : "Go premium to add more projects"}
							</Button>
						</EmptyState>
					)}
				</section>
			</main>
		</AppLayout>
	)
}

export default AppProjects;
