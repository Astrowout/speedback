import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { ApolloClient, Queries, initMiddleware } from '../../../helpers';

// Initialize the cors middleware
const cors = initMiddleware(
	Cors({
	  // Only allow requests with GET and OPTIONS
	  methods: ['GET', 'OPTIONS'],
	})
)

const comments = async (req: NextApiRequest, res: NextApiResponse) => {
	await cors(req, res);

	try {
		const { data: { comments } } = await ApolloClient.query({
			query: Queries.getCommentsByProject,
			variables: { projectId: req.query.projectId }
		});

		res.status(200).json(comments);
	} catch (error) {
		res.status(500).send(error);
	}
}

export default comments;
