import { NavBarSearch } from './NavBarSearch';
import { TransitionButton } from './TransitionButton';
import { useContext } from 'react';
import { AuthContext } from '../lib/AuthContext';
import Axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavBarEndSlot = () => {
    const { stateAuth, setAuth } = useContext(AuthContext);
    const router = useRouter();
    const logOut = async () => {
        try {
            await Axios.post('/api/logout');
            setAuth(null);
            router.push('/');
        } catch (error) {}
    };
    return (
        <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
            <li className="d-none d-xl-block">
                <NavBarSearch />
            </li>
            {stateAuth && (
                <li>
                    <div className="login-card">
                        <Link href="/user">
                            <a>
                                <i className="far">
                                    {stateAuth.user.username[0].toLocaleUpperCase()}
                                </i>
                            </a>
                        </Link>
                    </div>
                </li>
            )}
            <li className="d-none d-lg-block">
                {!stateAuth && <TransitionButton href="/login" text="Log in" />}
                {stateAuth && (
                    <TransitionButton onClick={logOut} text="Log Out" />
                )}
            </li>
        </ul>
    );
};
