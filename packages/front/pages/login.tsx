import Head from 'next/head';
import { FC } from 'react';
import { LoginForm } from '../components/LoginForm';
import { SubHeader } from '../components/SubHeader';
import { withLayout } from '../lib/withLayout';
import { withServerSide } from '../lib/withServerSide';

const Login: FC = () => {
    return (
        <>
            <Head>
                <title>Log In</title>
            </Head>
            <SubHeader text="Log In" />
            <LoginForm />
        </>
    );
};

export const getServerSideProps = withServerSide();

export default withLayout(Login);
