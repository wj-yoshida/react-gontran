import React from "react";
import Head from "../block/Head"
import { Link } from "react-router-dom";

import { usePosts } from "../custom-hooks/index";
import { readableDate } from "../helpers"

import {motion} from "framer-motion";

export default function Posts() {
  const [posts, isLoading] : any = usePosts();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;
    return posts.map((post:any) => (
      
      <Link
        className="posts__post"
        key={post.fields.slug}
        to={post.fields.slug}
      >
        <div className="posts__post__img__container">
          <img
            className="posts__post__img__container__img"
            src={post.fields.heroImage.fields.file.url}
            alt={post.fields.title}
          />
        </div>
        <small>{readableDate(post.fields.date)}</small>
        <h3>{post.fields.title}</h3>

        <p>{post.fields.description}</p>
      </Link>
    ));
  };

  return (
    <>
      <motion.div
          animate={{ opacity:1 }}
          initial={{ opacity:0 }}
          exit={{ opacity:0 }}
          transition={{ duration: 0.4}}
        >
      <Head title="News" />
        <div className="posts__container">
          <h2>Articles</h2>

          <div className="posts">{renderPosts()}</div>
        </div>
      </motion.div>
    </>
  );
}
