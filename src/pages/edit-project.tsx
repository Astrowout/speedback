import Head from 'next/head';
import type { NextPage } from "next";

import { Heading, NewProjectForm } from '../components';
import { AppLayout } from '../layouts';

const AppNewProject: NextPage = () => {
	return (
		<AppLayout>
			<Head>
				<title>Edit project - speedback</title>
			</Head>

			<main>
				<Heading title="New project" />

				<div className="2xl:container container-spacing section-spacing">
					<NewProjectForm className="max-w-xl" edit />
				</div>
			</main>
		</AppLayout>
	)
}

export default AppNewProject;
