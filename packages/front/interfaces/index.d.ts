import { DocumentNode } from 'graphql';
import { GetServerSidePropsContext } from 'next';

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U;

export interface IMenuResponse {
    menu: {
        items: IMenuItem[];
    };
}

export interface IMenuItem {
    id: string;
    url: string;
    text: string;
    subItems: Omit<IMenuItem, 'subItems'>[];
}

export interface IHomeHeader {
    title: string;
    subtitle: string;
    capchaphase: string;
    buttonLink?: string;
    buttonText?: string;
    image: {
        url: string;
    }[];
}

export interface IHomeCategories {
    id: string;
    title: string;
    subtitle: string;
    buttonLink: string;
    buttonText: string;
    image: {
        url: string;
    }[];
}

export interface IHomaPage {
    header: IHomeHeader;
    categories: IHomeCategories[];
}

export interface IAUth {
    jwt: string;
    user: {
        username: string;
        email: string;
    };
}

export interface IQuerySSR {
    docNode: DocumentNode;
    variables?:
        | Record<string, any>
        | ((ctx: GetServerSidePropsContext) => Record<string, any>);
}
