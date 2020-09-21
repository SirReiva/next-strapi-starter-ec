import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { FC } from 'react';
import { HomeCategories } from '../components/Homecategories';
import { HomeHeader } from '../components/HomeHeader';
import { Preload } from '../components/Preload';
import { queryHome } from '../graphql/queries';
import { IHomaPage } from '../interfaces';
import { withLayout } from '../lib/withLayout';
import { withServerSide } from '../lib/withServerSide';

const Home: FC = () => {
    const { data, loading } = useQuery<{ homePage: IHomaPage }>(queryHome);
    return (
        <>
            <Head>
                <title>Inicio</title>
            </Head>
            {data && (
                <>
                    <HomeHeader info={data.homePage.header} />
                    <HomeCategories info={data.homePage.categories} />
                </>
            )}
            {loading && <Preload />}
        </>
    );
};

export const getServerSideProps = withServerSide({ docNode: queryHome });

export default withLayout(Home);
