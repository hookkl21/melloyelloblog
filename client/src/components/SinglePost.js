import React, { useEffect, useState } from "react";
import classes from "./SinglePost.module.scss";
import image from "../images/coding.jpg";
import { FaEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function SinglePost() {
  //declare state
  const [singlePost, setSinglePost] = useState({});

  //Getting the ID for specific post
  const location = useLocation();
  const path = location.pathname.split("/")[2]; //in 3rd element, there is objectID from DB
  console.log(path);
  //fetching the single post data
  useEffect(() => {
    fetchSinglePost();
  }, [path]);
  const fetchSinglePost = async () => {
    const res = await axios.get(`/posts/${path}`);
    const data = res.data;
    setSinglePost(data);
  };
  console.log(singlePost);
  return (
    <div className={classes.singlePost}>
      <div className={classes.singlePost_wrapper}>
        {singlePost.photo && (
          <img
            src={singlePost.image}
            alt=""
            className={classes.singlePost_wrapper_img}
          />
        )}
        <section className={classes.singlePost_wrapper_titleSection}>
          <h1 className={classes.singlePost_wrapper_titleSection_title}>
            {singlePost.title}
          </h1>
          <div className={classes.singlePost_wrapper_titleSection_icons}>
            <FaEdit
              className={classes.singlePost_wrapper_titleSection_icons_icon}
            />
            <FiDelete
              className={classes.singlePost_wrapper_titleSection_icons_icon}
            />
          </div>
        </section>
        <section className={classes.singlePost_wrapper_titleSection_info}>
          <span>
            <Link to={`/?user=${singlePost.username}`} className="link">
              Author : <b>{singlePost.username}</b>
            </Link>
          </span>
          <span>{new Date(singlePost.createdAt).toDateString()}</span>
        </section>
        <div className={classes.singlePost_wrapper_body}>
          <p>{singlePost.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
