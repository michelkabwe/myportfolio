import gql from 'graphql-tag';

export const POSTS_QUERY = gql`
  query Posts {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;
