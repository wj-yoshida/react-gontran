const client = require("contentful").createClient({
    space: "7mp6ca7ra6f0",
    accessToken: "83FRAKYBlcczHXvv9NXzFiPCh1pQuxyXrY3Qy52Nilg"
  });
  
  const getBlogPosts = () => client.getEntries({content_type: "blogPost"}).then(response => response.items);
  
  const getSinglePost = slug =>
    client
      .getEntries({
        "fields.slug": slug,
        content_type: "blogPost"
      })
      .then(response => response.items);
  
  export { getBlogPosts, getSinglePost };
  