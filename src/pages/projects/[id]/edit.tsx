import Head from 'next/head';
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { Heading, NewProjectForm } from '../../../components';
import { AppLayout } from '../../../layouts';

const AppNewProject: NextPage = () => {
	const router = useRouter();

	return (
		<AppLayout>
			<Head>
				<title>Edit project - speedback</title>
			</Head>

			<main>
				<Heading title="Edit project" backLink={{ url: `/projects/${router.query.id}`, label: "Back to project" }} />

				<section className="2xl:container container-spacing section-spacing">
					<NewProjectForm className="max-w-xl" edit />
				</section>
			</main>
		</AppLayout>
	)
}

export default AppNewProject;
