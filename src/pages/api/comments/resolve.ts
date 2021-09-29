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

const resolveComment = async (req: NextApiRequest, res: NextApiResponse) => {
	await cors(req, res);

	const isResolved = (req.query.value === 'true');

	try {
		const { data: { updateComment: comment } } = await ApolloClient.mutate({
			mutation: Mutations.resolveComment,
			variables: { id: req.query.id, resolved: isResolved }
		});

		res.status(200).json(comment);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}

export default resolveComment;
