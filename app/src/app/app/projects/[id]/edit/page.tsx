import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { Heading, NewProjectForm } from '../../../../../components';
import { Queries } from '../../../../../helpers';
import client from '../../../../../helpers/graphql-client';

export async function generateStaticParams() {
	const { data: { projects } } = await client.query(Queries.getAllProjects);

	const paths = projects.map((project: any) => ({
		params: { id: project.id },
	}));

	return paths;
}


const AppEditProject = async ({ params }: { params: Params }) => {
	const { data } = await client.query(Queries.getProject, {
		id: params.id,
	});

	const formData = data ? {
		name: data.project.name,
		url: data.project.url,
		description: data.project.description,
	} : {};

	return (
		<main>
			<Heading title="Edit project" backLink={{ url: `/app/projects/${data?.project.id}`, label: "Back to project" }} />

			<section className="2xl:container container-spacing section-spacing">
				<NewProjectForm className="max-w-xl" data={formData} id={data?.project.id as string} />
			</section>
		</main>
	)
}

export default AppEditProject;
