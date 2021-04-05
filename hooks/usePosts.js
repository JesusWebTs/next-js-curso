import { useEffect, useState } from "react";

export const usePosts = async (
  uri = "https://jsonplaceholder.typicode.com/posts"
) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(uri);
      const newPosts = await res.json();
      setPosts(newPosts);
    };
    fetchPost();
  }, [uri]);

  return { posts, setPosts };
};
