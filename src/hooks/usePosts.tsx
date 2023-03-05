import { useState, useEffect } from 'react';
import axios from 'axios';


interface Post {
  id: number;
  title: string;
  featured_image: string;
}

export const usePosts = (): Post[] => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get('https://public-api.wordpress.com/rest/v1.1/sites/kabwedev.wordpress.com/posts/')
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return posts;
};
