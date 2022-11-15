import React from "react";
import MD from "react-markdown";
import Head from "../block/Head"
import { Link, useParams } from "react-router-dom";


import { useSinglePost } from "../custom-hooks/index";
import { readableDate } from "../helpers";

export default function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);
  const renderPost = () => {

    if (isLoading) return <p>Loading...</p>;

    return (
      
      <React.Fragment>
        <Head title={post.title} />
        <div className="post__intro">
          <h2 className="post__intro__title">{post.title}</h2>
          <small className="post__intro__date">{readableDate(post.date)}</small>
          <p className="post__intro__desc">{post.description}</p>

          <img
            className="post__intro__img"
            src={post.heroImage.fields.file.url}
            alt={post.title}
          />
        </div>

        <div className="post__body">
          <MD source={post.body} />
        </div>
      </React.Fragment>
    );
  };

  return (
    <>
      
      <div className="post">
        <Link className="post__back" to="/news">
          {"< Back"}
        </Link>

        {renderPost()}
      </div>
    </>
  );
}
