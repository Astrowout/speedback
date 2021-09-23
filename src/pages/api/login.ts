import { Magic } from '@magic-sdk/admin';
import type { NextApiRequest, NextApiResponse } from 'next'

const magic = new Magic(process.env.MAGIC_SECRET_KEY);

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const didToken = magic.utils.parseAuthorizationHeader(req.headers.authorization!);
      await magic.token.validate(didToken);
      res.status(200).json({ authenticated: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
}

export default login;
