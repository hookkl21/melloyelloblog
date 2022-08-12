import React from "react";
import classes from "./Posts.module.scss";
import postImage from "../images/coding.jpg";
import { Link } from "react-router-dom";

function Post({ posts }) {
  return (
    <div className={classes.post}>
      {posts.image && (
        <div className={classes.post_img}>
          <img src={posts.image} alt="coding" />
        </div>
      )}
      <div className={classes.post_description}>
        <Link to={`/posts/${posts._id}`}>
          <h2 className={classes.post_description_title}>{posts.title}</h2>
        </Link>
        {posts.categories.map((c) => (
          <h3 className={classes.post_description_category}>
            {c.categoryName || "Front-End"}
          </h3>
        ))}
        <h4 className={classes.post_description_dates}>
          {new Date(posts.createdAt).toDateString()}
        </h4>
        <p className={classes.post_description_info}>{posts.description}</p>
      </div>
    </div>
  );
}

export default Post;
