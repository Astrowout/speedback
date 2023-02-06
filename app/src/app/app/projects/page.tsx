"use client";

import { useContext } from 'react';
import client from "../../../helpers/graphql-client";
import { CollectionIcon, PlusIcon } from '@heroicons/react/outline';
import get from "lodash/get";

import { Button, EmptyState, Heading, Loader, ProjectsTable } from '../../../components';
import { Queries } from '../../../helpers';
import { AuthContext } from '../../../context';

const Projects = async () => {
	const { isLoading: userLoading, user } = useContext(AuthContext);

	if (!user) {
		return <p>No user</p>
	}

	const { data, loading } = await client.query(Queries.getProjects, {
		issuer: user?.issuer,
	});

	const { data: globals } = await client.query(Queries.getGlobals, {
		issuer: user?.issuer,
	});

	const isLoading = userLoading || loading;

	return (
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
	)
}

export default Projects;
