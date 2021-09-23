import { DocumentNode, gql } from "@apollo/client";

const Mutations: { [key: string]: DocumentNode } = {};

Mutations.createUser = gql`
	 mutation ($issuer: String!, $email: String!) {
		createAuthUser(data: {email: $email, issuer: $issuer, role: admin}) {
			id
		}
		publishAuthUser(where: {issuer: $issuer}, to: PUBLISHED) {
			email
			issuer
		}
	}
`;

Mutations.createProject = gql`
	 mutation ($name: String!, $url: String!, $description: String, $issuer: String!) {
		createProject(data: {
			name: $name,
			url: $url,
			description:
			$description,
			authUser: { connect: { issuer: $issuer } },
			createdByAuthUser: { connect: { issuer: $issuer }
		}}) {
			id
		}
	}
`;

Mutations.deleteProject = gql`
	 mutation ($id: ID!) {
		deleteProject(where: { id: $id }) {
			id
		}
	}
`;

Mutations.updateProject = gql`
	 mutation ($name: String!, $url: String!, $description: String) {
		updateProject(data: {name: $name, url: $url, description: $description}) {
			id
		}
	}
`;

Mutations.publishProject = gql`
	 mutation ($id: ID!) {
		publishProject(where: {id: $id}, to: PUBLISHED) {
			id
		}
	}
`;

export default Mutations;
