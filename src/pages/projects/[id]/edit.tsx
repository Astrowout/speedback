import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { Heading, NewProjectForm } from '../../../components';
import { AppLayout } from '../../../layouts';
import { ApolloClient, Queries } from '../../../helpers';

const AppNewProject: NextPage = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const data = {
		name: project.name,
		url: project.url,
		description: project.description,
	}

	return (
		<AppLayout>
			<Head>
				<title>Edit project - speedback</title>
			</Head>

			<main>
				<Heading title="Edit project" backLink={{ url: `/projects/${project.id}`, label: "Back to project" }} />

				<section className="2xl:container container-spacing section-spacing">
					<NewProjectForm className="max-w-xl" data={data} id={project.id as string} />
				</section>
			</main>
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

	return {
		props: {
			project,
		},
		revalidate: 10, // In seconds
	}
}

export default AppNewProject;
