import React from "react";
import classes from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_items}>
        <h3 className={classes.sidebar_items_categories}>Categories</h3>
        <section className={classes.sidebar_items}>
          <h4 className={classes.sidebar_items_subtitle}>Front-End</h4>
          <ul className={classes.sidebar_items_lists}>
            <li className={classes.sidebar_items_lists_item}>HTML/CSS</li>
            <li className={classes.sidebar_items_lists_item}>JavaScript</li>
            <li className={classes.sidebar_items_lists_item}>React</li>
            <li className={classes.sidebar_items_lists_item}>Others</li>
          </ul>
        </section>
        <section className={classes.sidebar_items_}>
          <h4 className={classes.sidebar_items_subtitle}>Lawn</h4>
          <ul className={classes.sidebar_items_lists}>
            <li className={classes.sidebar_items_lists_item}>
              Warm Season Turf
            </li>
            <li className={classes.sidebar_items_lists_item}>
              Cool Season Turf
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
