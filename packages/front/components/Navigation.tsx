import { NavigationItem } from './NavigationItem';
import { NaviagtionSubMenu } from './NavigationSubMenu';
import { memo } from 'react';
import { useQuery } from '@apollo/client';
import { queryMenus } from '../graphql/queries';
import { IMenuItem, IMenuResponse } from '../interfaces';

const _Navigation = () => {
    const { data } = useQuery<IMenuResponse>(queryMenus);
    const menus: IMenuItem[] | null =
        data && data.menu && data.menu.items ? data.menu.items : null;
    return (
        <div className="main-menu f-right d-none d-lg-block">
            <nav>
                <ul id="navigation">
                    {menus &&
                        menus.map(menuItem => {
                            if (menuItem.subItems.length === 0)
                                return (
                                    <NavigationItem
                                        key={menuItem.id}
                                        href={menuItem.url}
                                    >
                                        {menuItem.text}
                                    </NavigationItem>
                                );
                            return (
                                <li key={menuItem.id}>
                                    {menuItem.url ? (
                                        <NavigationItem
                                            simple
                                            href={menuItem.url}
                                        >
                                            {menuItem.text}
                                        </NavigationItem>
                                    ) : (
                                        <a>{menuItem.text}</a>
                                    )}

                                    <NaviagtionSubMenu>
                                        {menuItem.subItems.map(subMenuItem => (
                                            <NavigationItem
                                                key={subMenuItem.id}
                                                href={subMenuItem.url}
                                            >
                                                {subMenuItem.text}
                                            </NavigationItem>
                                        ))}
                                    </NaviagtionSubMenu>
                                </li>
                            );
                        })}
                </ul>
            </nav>
        </div>
    );
};

export const Navigation = memo(_Navigation);
