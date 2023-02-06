import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

import { initMiddleware, Mutations } from '../../../helpers';
import client from '../../../helpers/graphql-client';

// Initialize the cors middleware
const cors = initMiddleware(
	Cors({
		// Only allow requests with POST and OPTIONS
		methods: ['POST', 'OPTIONS'],
	})
);

const postComment = async (req: NextApiRequest, res: NextApiResponse) => {
	await cors(req, res);

	try {
		const { data: { createComment: comment } } = await client.mutate(Mutations.createComment,
			req.body,
		);
		await client.mutate(Mutations.publishComment, {
			id: comment.id,
		});

		res.status(200).json(comment);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}

export default postComment;
