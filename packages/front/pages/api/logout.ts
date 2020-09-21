import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const logout = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const setCookie = cookie.serialize('jid', '', {
            httpOnly: true,
            path: '/',
            // secure: true,
            sameSite: true,
            maxAge: 0,
        });
        res.setHeader('Set-Cookie', setCookie);
        res.status(200).send('');
    }
};

export default logout;
