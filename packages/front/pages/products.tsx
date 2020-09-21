import { FC } from 'react';
import { SubHeader } from '../components/SubHeader';
import Head from 'next/head';
import { ProductList } from '../components/ProductList';
import { withServerSide } from '../lib/withServerSide';
import { withLayout } from '../lib/withLayout';

const Products: FC = () => {
    return (
        <>
            <Head>
                <title>Productos</title>
            </Head>
            <SubHeader text="Productos" />
            <ProductList />
        </>
    );
};

export const getServerSideProps = withServerSide();

export default withLayout(Products);
