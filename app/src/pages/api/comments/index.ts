import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { Queries, initMiddleware } from '../../../helpers';
import client from '../../../helpers/graphql-client';

// Initialize the cors middleware
const cors = initMiddleware(
	Cors({
		// Only allow requests with GET and OPTIONS
		methods: ['GET', 'OPTIONS'],
	})
);

const comments = async (req: NextApiRequest, res: NextApiResponse) => {
	await cors(req, res);

	try {
		const { data: { comments } } = await client.query(Queries.getCommentsByProject, {
			projectId: req.query.projectId,
			pathname: req.query.pathname,
		});

		res.status(200).json(comments);
	} catch (error) {
		res.status(500).send(error);
	}
}

export default comments;
