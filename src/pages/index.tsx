import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticProps, NextPage } from "next";
import { useQuery } from "@apollo/client";

import { Heading, EmptyState, ProjectsTable, Loader, Button } from '../components';
import { AppLayout } from '../layouts';
import { PlusIcon, EyeIcon, CollectionIcon } from '@heroicons/react/outline';
import { ApolloClient, Queries } from '../helpers';

const AppIndex: NextPage = () => {
	const { data, loading } = useQuery(Queries.getProjects);

	return (
		<AppLayout>
			<Head>
				<title>My dashboard - speedback</title>
				<meta name="description" content="Bugbash your digital products at hyperspeed with speedback." />
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
						<Button
							url="/projects"
							icon={EyeIcon}
							className="my-1.5 mx-2"
							secondary
						>
							View projects
						</Button>

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
					) : data.projects?.length ? (
						<ProjectsTable className="max-w-3xl" rows={data.projects} compact></ProjectsTable>
					) : (
						<EmptyState title="No projects found." icon={CollectionIcon}>
							<Button
								url="/projects/create"
								disabled={!!data?.projects.length}
								icon={PlusIcon}
								className="my-1.5 mx-2"
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

// export const getStaticProps: GetStaticProps = async({ params }) => {
// 	const { data: { project } } = await ApolloClient.query({
// 		query: Queries.getGlobals,
// 		variables: { id: params?.id }
// 	});

// 	return {
// 		props: {
// 			comment,
// 			project
// 		},
// 		revalidate: 10, // In seconds
// 	}
// }

export default AppIndex;
