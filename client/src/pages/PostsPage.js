import React from "react";
import classes from "./PostsPage.module.scss";
import { Sidebar, Posts } from "../components";

export default function PostsPage() {
  return (
    <div className={classes.container}>
      <Posts />
      <Sidebar />
    </div>
  );
}
