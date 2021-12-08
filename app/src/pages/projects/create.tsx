import Head from 'next/head';
import type { NextPage } from "next";

import { Heading, NewProjectForm } from '../../components';
import { AppLayout } from '../../layouts';

const AppNewProject: NextPage = () => {
	return (
		<AppLayout>
			<Head>
				<title>New project - speedback</title>
			</Head>

			<main>
				<Heading title="New project" backLink={{ url: "/projects", label: "Back to projects" }} />

				<section className="2xl:container container-spacing section-spacing">
					<NewProjectForm className="max-w-xl" />
				</section>
			</main>
		</AppLayout>
	)
}

export default AppNewProject;
