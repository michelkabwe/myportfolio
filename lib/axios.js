import axios from 'axios';

export const GRAPHQL_ENDPOINT = 'https://your-wordpress-site.com/graphql';

export async function fetchPosts() {
  const query = `
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

  const { data } = await axios.post(GRAPHQL_ENDPOINT, { query });
  return data.data.posts.nodes;
}
