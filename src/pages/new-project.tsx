import Head from 'next/head';
import type { NextPage } from "next";
import { PlusIcon } from '@heroicons/react/outline';

import { Heading, NewProjectForm } from '../components';
import { PlatformLayout } from '../layouts';

const AppNewProject: NextPage = () => {
	return (
		<PlatformLayout>
			<Head>
				<title>New project - speedback</title>
			</Head>

			<main>
				<Heading title="New project" />

				<div className="2xl:container container-spacing section-spacing">
					<NewProjectForm className="max-w-2xl" />
				</div>
			</main>
		</PlatformLayout>
	)
}

export default AppNewProject;
