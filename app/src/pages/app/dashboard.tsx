import Head from 'next/head';
import type { NextPage } from "next";
import { useContext } from 'react';
import { useQuery } from "@apollo/client";
import get from "lodash/get";

import { Heading, EmptyState, ProjectsTable, Loader, Button } from '../../components';
import { AppLayout } from '../../layouts';
import { PlusIcon, EyeIcon, CollectionIcon } from '@heroicons/react/outline';
import { Queries } from '../../helpers';
import { AuthContext } from '../../context';

const AppIndex: NextPage = () => {
	const { user, isLoading } = useContext(AuthContext);

	const { data, loading } = useQuery(Queries.getProjects, {
		variables: { issuer: user?.issuer },
		skip: !user,
		fetchPolicy: "cache-and-network"
	});

	const { data: globals } = useQuery(Queries.getGlobals, {
		skip: !user
	});

	return (
		<AppLayout>
			<Head>
				<title>My dashboard - speedback</title>
				<meta name="description" content="Bugbash your digital products at hyperspeed with speedback." />
				<meta name="robots" content="noindex, nofollow" />
			</Head>

			<main>
				<Heading
					title="My dashboard"
					stats={{
						commentCount: get(globals, ["commentsConnection", "aggregate", "count"], 0),
						lastCommentDate: get(globals, ["comments", "0", "createdAt"], null),
					}}
				>
					<div className="-my-1.5 -mx-2 mt-5 flex items-center flex-wrap lg:mt-0">
						<Button
							url="/app/projects"
							icon={EyeIcon}
							className="my-1.5 mx-2"
							secondary
						>
							View projects
						</Button>

						<Button
							url="/app/projects/create"
							disabled={!!data?.projects.length}
							icon={PlusIcon}
							className="my-1.5 mx-2"
						>
							{!data?.projects.length ? "Create a new project" : "Go premium to add more projects"}
						</Button>
					</div>
				</Heading>

				<section className="2xl:container container-spacing section-spacing">
					{(loading || isLoading) ? (
						<Loader />
					) : data?.projects.length ? (
						<ProjectsTable className="max-w-3xl" rows={data.projects} compact></ProjectsTable>
					) : (
						<EmptyState title="No projects found." icon={CollectionIcon}>
							<Button
								url="/app/projects/create"
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
	);
}

export default AppIndex;
