import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import React, { FC, useState } from 'react';
import { IAUth } from '../interfaces';
import { useApollo } from '../lib/apolloClient';
import { AuthContext } from '../lib/AuthContext';
import '../styles/globals.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const apolloClient = useApollo(
        pageProps.initialApolloState,
        pageProps.user
    );
    const [stateAuth, setAuth] = useState<IAUth | null>(pageProps.user || null);
    return (
        <AuthContext.Provider value={{ stateAuth, setAuth }}>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </AuthContext.Provider>
    );
};

export default App;
