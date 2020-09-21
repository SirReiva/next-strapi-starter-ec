import Head from 'next/head';
import { FC } from 'react';
import { withLayout } from '../lib/withLayout';

const User: FC = () => {
    return (
        <>
            <Head>
                <title>Perfil de Usuario</title>
            </Head>
            <div>USER</div>
        </>
    );
};

export default withLayout(User);
