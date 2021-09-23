import { MagicUserMetadata } from 'magic-sdk';
import { useQuery, useMutation } from '@apollo/client';

import { ApolloClient, Queries, Mutations } from '../helpers';
import { useState } from 'react';

const useUser = (user: MagicUserMetadata | null, setUser: (data: any) => void) => {
	const [isUserFromDb, setIsUserFromDb] = useState(false);

	const { data } = useQuery(Queries.getUser, {
		variables: { issuer: user?.issuer },
		skip: !user || isUserFromDb,
		client: ApolloClient,
	});

	const [createUser] = useMutation(Mutations.createUser, {
		variables: { issuer: user?.issuer, email: user?.email },
		client: ApolloClient,
	});

	if (data && !data.authUser) {
		createUser();
	} else if (data && data.authUser) {
		setUser({
			...user,
			...data.authUser
		});

		setIsUserFromDb(true);
	}
}

export default useUser;
