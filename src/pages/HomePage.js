import React from "react";
import { Header, Sidebar, Post } from "../components";
import classes from "./Home.module.scss";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Post />
        <Sidebar />
      </div>
    </div>
  );
}
