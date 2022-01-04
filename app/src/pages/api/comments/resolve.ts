import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { ApolloClient, initMiddleware, Mutations, Queries } from '../../../helpers';

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
		const { data: { comment } } = await ApolloClient.query({
			query: Queries.getComment,
			fetchPolicy: "network-only",
			variables: { id: req.body.id }
		});
		const { data: { publishComment: updatedComment } } = await ApolloClient.mutate({
			mutation: Mutations.resolveComment,
			variables: { id: req.body.id, resolved: !comment.resolved }
		});

		res.status(200).json(updatedComment);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}

export default resolveComment;
