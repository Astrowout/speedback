import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { ApolloClient, initMiddleware, Mutations } from '../../../helpers';

// Initialize the cors middleware
const cors = initMiddleware(
	Cors({
		// Only allow requests with POST and OPTIONS
		methods: ['POST', 'OPTIONS'],
	})
)

const resolveComment = async (req: NextApiRequest, res: NextApiResponse) => {
	await cors(req, res);

	try {
		const { data: { publishComment: comment } } = await ApolloClient.mutate({
			mutation: Mutations.resolveComment,
			variables: { id: req.body.id, resolved: req.body.value }
		});

		res.status(200).json(comment);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}

export default resolveComment;
