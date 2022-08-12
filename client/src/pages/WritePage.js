import React from "react";
import classes from "./WritePage.module.scss";
import { FaPlus } from "react-icons/fa";
import image from "../images/coding.jpg";

export default function WritePage() {
  return (
    <div className={classes.write}>
      <img src={image} alt="" className={classes.write_img} />
      <form className={classes.write_form}>
        <div className={classes.write_form_groups}>
          <label htmlFor="fileInput">
            <FaPlus className={classes.write_form_groups_icon} />
          </label>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            className={classes.write_form_groups_fileInput}
            style={{ display: "none" }}
          />
          <input
            type="text"
            name="text"
            placeholder="Title"
            className={classes.write_form_groups_title}
            autoFocus={true}
          />
        </div>
        <div className={classes.write_form_group}>
          <textarea
            type="text"
            placeholder="Tell your story..."
            className={classes.write_form_group_textarea}
          ></textarea>
        </div>
        <button>Publish</button>
      </form>
    </div>
  );
}
