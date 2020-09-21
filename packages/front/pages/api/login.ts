import { NextApiRequest, NextApiResponse } from 'next';
import { initializeApollo } from '../../lib/apolloClient';
import { gql } from '@apollo/client';
import cookie from 'cookie';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const client = initializeApollo();

            const mutation = gql`
                mutation($input: UsersPermissionsLoginInput!) {
                    login(input: $input) {
                        jwt
                        user {
                            username
                            email
                        }
                    }
                }
            `;
            const response = await client.mutate({
                mutation,
                variables: {
                    input: {
                        identifier: email,
                        password,
                    },
                },
            });

            const setCookie = cookie.serialize(
                'jid',
                JSON.stringify({
                    jwt: response.data.login.jwt,
                    user: {
                        username: response.data.login.user.username,
                        email: response.data.login.user.email,
                    },
                }),
                {
                    httpOnly: true,
                    path: '/',
                    // secure: true,
                    sameSite: true,
                    maxAge: 60000,
                }
            );
            res.setHeader('Set-Cookie', setCookie);
            res.json({
                jwt: response.data.login.jwt,
                user: {
                    username: response.data.login.user.username,
                    email: response.data.login.user.email,
                },
            });
        } catch (error) {
            console.error('ERROR', error);
            res.status(error.errors[0].extensions.exception.code).json({
                message: error.errors[0].message,
            });
        }
    }
};

export default login;
