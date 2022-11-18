import { createClient } from 'contentful';

const config = {
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN || "",
}

const client = createClient(config);

  

const getBlogPosts : any = () => 
  client.getEntries({
    content_type: "blogPost"
  })
  .then(response => response.items);


const getSinglePost = (slug: any) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "blogPost"
    })
    .then(response => response.items);

export { getBlogPosts, getSinglePost };
