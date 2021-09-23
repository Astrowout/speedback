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
	 mutation ($issuer: String!, $email: String!) {
		createProject(data: {email: $email, issuer: $issuer}) {
			id
		}
		publishProject(where: {issuer: $issuer}, to: PUBLISHED) {
			id
		}
	}
`;

export default Mutations;
