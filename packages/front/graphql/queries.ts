import { gql } from '@apollo/client';

export const queryMenus = gql`
    query {
        menu {
            items {
                id
                url
                text
                subItems {
                    id
                    url
                    text
                }
            }
        }
    }
`;

export const queryHome = gql`
    query {
        homePage {
            header {
                title
                subtitle
                capchaphase
                buttonLink
                buttonText
                image {
                    url
                }
            }
            categories {
                id
                title
                subtitle
                buttonText
                buttonLink
                image {
                    url
                }
            }
        }
    }
`;

export const queryProducts = gql`
    query {
        products(limit: 10) {
            id
            name
            description
        }
    }
`;
