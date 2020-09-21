import cookie from 'cookie';
import combinedQuery from 'graphql-combine-query';
import { GetServerSidePropsContext } from 'next';
import { queryMenus } from '../graphql/queries';
import { IQuerySSR } from '../interfaces';
import { initializeApollo } from './apolloClient';

export const withServerSide = (...queries: IQuerySSR[]) => async (
    _ctx: GetServerSidePropsContext
) => {
    const apolloClient = initializeApollo();
    let query = combinedQuery('CombinedQuery').add(queryMenus);
    for (const q of queries) {
        if (q.variables) {
            if (typeof q.variables === 'function')
                query = query.add(q.docNode, q.variables(_ctx));
            else query = query.add(q.docNode, q.variables);
        } else query = query.add(q.docNode);
    }
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
};
