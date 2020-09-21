import cookie from 'cookie';
import combinedQuery from 'graphql-combine-query';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import { ContactSection } from '../components/ContactSection';
import { SubHeader } from '../components/SubHeader';
import { queryMenus } from '../graphql/queries';
import { initializeApollo } from '../lib/apolloClient';
import { withLayout } from '../lib/withLayout';

const Contacts: FC = () => {
    return (
        <>
            <Head>
                <title>Contacto</title>
            </Head>
            <SubHeader text="Contacto" />
            <ContactSection />
        </>
    );
};

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
    const apolloClient = initializeApollo();
    const query = combinedQuery('CombinedQuery').add(queryMenus);
    await apolloClient.query({
        query: query.document,
    });
    const user = JSON.parse(
        cookie.parse(_ctx.req.headers.cookie || '{}').jid || 'null'
    );
    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
            user,
        },
    };
}

export default withLayout(Contacts);
