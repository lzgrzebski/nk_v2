import gql from "graphql-tag";

export const PAGE_QUERY = gql`
    query Pages($id:  ID!) {
        page(id: $id) {
            Title
            Page_components {
                ... on ComponentPlacesP {
                    __typename
                    places {
                      title
                      description
                      link
                      image {
                        url
                      }
                    }
                }
                ... on ComponentHeaderHeader {
                    __typename
                    title
                }
                ... on ComponentTextText {
                    __typename
                    text
                }
                ... on ComponentOtherPlacesOtherPlaces {
                    __typename 
                    other_places {
                      title
                      image {
                          url
                      }
                    }
                }
                ... on ComponentLinkLink {
                    __typename
                    title
                    link
                    target  
                }
                ... on ComponentImageImage {
                    __typename
                    title
                        image {
                        url
                    }
                }
            },
        }
    }
`;

export const GALLERY_QUERY = gql`
    query Galleries($id:  ID!) {
        galleries {
            id
            name
        }
        gallery(id: $id) {
        name
        images {
            ...on ComponentImagesImages {
            title
            size
            columns
            images {
                url
            }
            }
        }
        }
    }
`;

export const POST_QUERY = gql`
    query Posts($id:  ID!) {
        post(id: $id) {
            id,
            title,
            shorttext,
            text,
            cover {
            url
            }
        }
    }
`;

export const POSTS_QUERY = gql`
    query Posts {
        posts(sort: "id:desc") {
        id,
        title,
        shorttext,
        text,
        cover {
        url
        }
    }
    }
`;