import { DocumentNode, gql } from "@apollo/client";

const Queries: { [key: string]: DocumentNode } = {};

Queries.getGlobals = gql`
	query {
		comments(first: 1, orderBy: createdAt_DESC) {
			createdAt
		}
		commentsConnection {
			aggregate {
				count
			}
		}
	}
`;

Queries.getUser = gql`
	query ($issuer: String!) {
		authUser(where: {issuer: $issuer}) {
			id
		}
	}
`;

Queries.getProjects = gql`
	query {
		projects {
			id
			name
			slug
			url
			description
			authUser {
				issuer
				email
			}
			comments {
				id
			}
		}
	}
`;

export default Queries;
