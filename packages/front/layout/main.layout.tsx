import React, { FC } from 'react';
// import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export const MainLayout: FC = ({ children }) => (
    <>
        <NavBar />
        <main>{children}</main>
        {/* <Footer /> */}
    </>
);
