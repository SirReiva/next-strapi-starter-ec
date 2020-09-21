import { FC } from 'react';

export const NaviagtionSubMenu: FC = ({ children }) => (
    <>
        <ul className="submenu">{children}</ul>
    </>
);
