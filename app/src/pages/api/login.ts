import { Magic } from '@magic-sdk/admin';
import { NextApiRequest, NextApiResponse } from 'next';

// Initiating Magic instance for server-side methods
const magic = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function login(req: NextApiRequest, res: NextApiResponse) {
	if (!req.headers.authorization) {
		return res.status(500).json({ error: "Oops! Authorization headers not found." });
	}

	try {
		const didToken = req.headers.authorization.substr(7);
		await magic.token.validate(didToken);
		res.status(200).json({ authenticated: true });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
}
