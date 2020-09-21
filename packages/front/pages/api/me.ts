import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const me = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const user = JSON.parse(
                cookie.parse(req.headers.cookie || '{}').jid || 'null'
            );
            if (!user) throw Error('UnAuthorized');
            return res.json(user);
        } catch (error) {
            res.status(500).json({
                message: 'Server Error',
            });
        }
    }
};

export default me;
