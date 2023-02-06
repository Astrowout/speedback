import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { initMiddleware, Mutations, Queries } from '../../../helpers';
import client from '../../../helpers/graphql-client';

// Initialize the cors middleware
const cors = initMiddleware(
	Cors({
		// Only allow requests with POST and OPTIONS
		methods: ['POST', 'OPTIONS'],
	})
);

const resolveComment = async (req: NextApiRequest, res: NextApiResponse) => {
	await cors(req, res);

	try {
		const { data: { comment } } = await client.query(Queries.getCommentResolved, {
			id: req.body.id,
		});
		const { data: { publishComment: updatedComment } } = await client.mutate(Mutations.resolveComment, {
			id: req.body.id,
			resolved: !comment.resolved,
		});

		res.status(200).json(updatedComment);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}

export default resolveComment;
