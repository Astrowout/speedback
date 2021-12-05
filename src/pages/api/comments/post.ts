import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { ApolloClient, initMiddleware, Mutations } from '../../../helpers';

// Initialize the cors middleware
const cors = initMiddleware(
	Cors({
		// Only allow requests with GET and OPTIONS
		methods: ['GET', 'OPTIONS'],
	})
)

const postComment = async (req: NextApiRequest, res: NextApiResponse) => {
	await cors(req, res);

	try {
		const { data: { createComment: comment } } = await ApolloClient.mutate({
			mutation: Mutations.createComment,
			variables: req.query
		});
		await ApolloClient.mutate({
			mutation: Mutations.publishComment,
			variables: { id: comment.id }
		});

		res.status(200).json(comment);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}

export default postComment;
