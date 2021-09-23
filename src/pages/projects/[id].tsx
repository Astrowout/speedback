import Head from 'next/head';
import type { NextPage } from "next";

import { Heading, NewProjectForm } from '../../components';
import { AppLayout } from '../../layouts';

const AppProjectDetail: NextPage = () => {
	return (
		<AppLayout>
			<Head>
				<title>New project - speedback</title>
			</Head>

			<main>
				<Heading title="New project" />

				<div className="2xl:container container-spacing section-spacing">
					<NewProjectForm className="max-w-xl" />
				</div>
			</main>
		</AppLayout>
	)
}

export default AppProjectDetail;
