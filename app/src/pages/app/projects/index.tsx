import Head from 'next/head';
import { useContext } from 'react';
import type { NextPage } from "next";
import { CollectionIcon, PlusIcon } from '@heroicons/react/outline';
import { useQuery } from '@apollo/client';
import get from "lodash/get";

import { Button, EmptyState, Heading, Loader, ProjectsTable } from '../../../components';
import { AppLayout } from '../../../layouts';
import { Queries } from '../../../helpers';
import { AuthContext } from '../../../context';

const AppProjects: NextPage = () => {
	const { isLoading: userLoading, user } = useContext(AuthContext);
	const { data, loading } = useQuery(Queries.getProjects, {
		variables: { issuer: user?.issuer },
		skip: !user,
		fetchPolicy: "cache-and-network"
	});

	const { data: globals } = useQuery(Queries.getGlobals, {
		variables: { issuer: user?.issuer },
		skip: !user,
		fetchPolicy: "cache-and-network"
	});

	const isLoading = userLoading || loading;

	return (
		<AppLayout>
			<Head>
				<title>Projects - speedback</title>
				<meta name="description" content="Bugbash your digital products at hyperspeed with speedback." />
				<meta name="robots" content="noindex, nofollow" />
			</Head>

			<main>
				<Heading
					title="Projects"
					stats={{
						commentCount: get(globals, ["commentsConnection", "aggregate", "count"], 0),
						lastCommentDate: get(globals, ["comments", "0", "createdAt"], null),
					}}
				>
					<div className="-my-1.5 -mx-2 mt-5 flex flex-wrap lg:mt-0">
						<Button
							url="/app/projects/create"
							disabled={!!data?.projects.length}
							icon={PlusIcon}
							className="my-1.5 mx-2"
						>
							{!data?.projects.length ? "Create a new project" : "Contact us to add more projects"}
						</Button>
					</div>
				</Heading>

				<section className="2xl:container container-spacing section-spacing">
					{isLoading ? (
						<Loader />
					) : data?.projects.length ? (
						<ProjectsTable rows={data.projects}></ProjectsTable>
					) : (
						<EmptyState title="No projects found." icon={CollectionIcon}>
							<Button
								url="/app/projects/create"
								disabled={!!data?.projects.length}
								icon={PlusIcon}
								className="mt-6"
							>
								{!data?.projects.length ? "Create a new project" : "Contact us to add more projects"}
							</Button>
						</EmptyState>
					)}
				</section>
			</main>
		</AppLayout>
	)
}

export default AppProjects;
