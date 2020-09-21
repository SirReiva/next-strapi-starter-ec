import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    HttpLink,
} from '@apollo/client';
import { useMemo } from 'react';
import config from '../config';
import { IAUth } from '../interfaces';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(user?: IAUth) {
    const headers: Record<string, string> = user
        ? {
              Authorization: user.jwt,
          }
        : {};
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: config.BACKEND_ULR + '/graphql',
            credentials: 'same-origin',
        }),
        cache: new InMemoryCache(),
        headers,
    });
}

export function initializeApollo(
    initialState?: ApolloClient<NormalizedCacheObject>,
    user?: IAUth
) {
    // const _apolloClient: ApolloClient<NormalizedCacheObject> =
    //     apolloClient ?? createApolloClient();

    let _apolloClient: ApolloClient<NormalizedCacheObject> = apolloClient;
    if (!apolloClient || user) {
        _apolloClient = createApolloClient(user);
    }

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        const existingCache = _apolloClient.extract();
        // Restore the cache using the data passed from getStaticProps/getServerSideProps
        // combined with the existing cached data
        _apolloClient.cache.restore({
            ...existingCache,
            ...initialState,
        } as any);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function useApollo(
    initialState: ApolloClient<NormalizedCacheObject>,
    user: IAUth
) {
    const store = useMemo(() => initializeApollo(initialState, user), [
        initialState,
        user,
    ]);
    return store;
}
