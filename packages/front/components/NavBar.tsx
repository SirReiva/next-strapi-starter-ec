import React, { FC } from 'react';
import { Logo } from './Logo';
import { NavBarEndSlot } from './NavBarEndSlot';
import { Navigation } from './Navigation';

export const NavBar: FC = () => {
    return (
        <header>
            <div className="header-area">
                <div className="main-header ">
                    <div className="header-bottom  header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                                    <Logo extraClass="logo" />
                                </div>
                                <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                                    <Navigation />
                                </div>
                                <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                    <NavBarEndSlot />
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
