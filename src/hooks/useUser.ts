import { MagicUserMetadata } from 'magic-sdk';
import { useQuery, useMutation } from '@apollo/client';

import { ApolloClient, Queries, Mutations } from '../helpers';

const useUser = (user: MagicUserMetadata | null) => {
	const { data, error } = useQuery(Queries.getUser, {
		variables: { issuer: user?.issuer },
		skip: !user,
		client: ApolloClient,
	});

	const [createUser, { data: newUser }] = useMutation(Mutations.createUser, {
		variables: { issuer: user?.issuer, email: user?.email },
		client: ApolloClient,
	});

	if (data && !data.authUser) {
		createUser();
	}

	console.log(newUser);
}

export default useUser;
