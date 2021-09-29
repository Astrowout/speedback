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

Mutations.upsertProject = gql`
	 mutation ($id: ID, $name: String!, $url: String!, $description: String, $issuer: String!) {
		upsertProject(
			where: { id: $id },
			upsert: {
				create: {
					name: $name,
					url: $url,
					description: $description,
					authUser: { connect: [{ issuer: $issuer }] },
					createdByAuthUser: { connect: { issuer: $issuer } }
				},
				update: {
					name: $name,
					url: $url,
					description: $description,
					authUser: { connect: [{ where: { issuer: $issuer } }] }
				},
			},
		) {
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

Mutations.resolveComment = gql`
	 mutation ($id: ID!, $resolved: Boolean!) {
		updateComment(
			data: { resolved: $resolved },
			where: { id: $id },
		) {
			id
			resolved
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
