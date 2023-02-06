import type { NextPage } from "next";

import { Heading, NewProjectForm } from '../../../../components';

const NewProject: NextPage = () => {
	return (
		<main>
			<Heading title="New project" backLink={{ url: "/app/projects", label: "Back to projects" }} />

			<section className="2xl:container container-spacing section-spacing">
				<NewProjectForm className="max-w-xl" />
			</section>
		</main>
	)
}

export default NewProject;
