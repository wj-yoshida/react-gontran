import { useEffect, useState } from "react";

import { getBlogPosts } from "../../contentful";

type props = {
  posts: any
}

const promise = getBlogPosts();

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((blogPosts:any) => {
      setPosts(blogPosts);
      setLoading(false);
    });
  }, []);

  return [posts, isLoading];
}
