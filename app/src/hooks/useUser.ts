import { MagicUserMetadata } from 'magic-sdk';

import { Queries, Mutations } from '../helpers';
import { useState } from 'react';
import client from '../helpers/graphql-client';

const useUser = async (user: MagicUserMetadata | null, setUser: (data: any) => void) => {
	const [isUserFromDb, setIsUserFromDb] = useState(false);

	if (!user) {
		return;
	}

	const { data } = await client.query(Queries.getUser, {
		issuer: user?.issuer,
	});

	if (data && !data.authUser) {
		await client.mutate(Mutations.createUser, {
			issuer: user?.issuer,
			email: user?.email,
		});
	} else if (data && data.authUser) {
		setUser({
			...user,
			...data.authUser
		});

		setIsUserFromDb(true);
	}
}

export default useUser;
