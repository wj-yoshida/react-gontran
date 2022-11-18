import { useEffect, useState } from "react";

import { getSinglePost } from "../../contentful";

export default function useSinglePost(slug:string) {
  const promise = getSinglePost(slug);

  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((result:any) => {
      setPost(result[0].fields);
      setLoading(false);
    });
  }, []);

  return [post, isLoading];
}
