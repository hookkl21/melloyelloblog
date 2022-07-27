import React from "react";
import logo from "../images/blog-logo.png";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Navbar.module.scss";

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link className={classes.header__content__logo} to="/">
          <img src={logo} alt="MelloYello Blog" />
        </Link>
        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="posts">Posts</Link>
            </li>
            <li>
              <Link to="write">Write</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <button>Login</button>
        </nav>
        <div className={classes.header__content__toggle}>
          <BiMenuAltRight className={classes.header__content__icon} />
        </div>
      </div>
    </header>
  );
}

// {
//   /* <h3>Login</h3> */
// }

export default Navbar;
