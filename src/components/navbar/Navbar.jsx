import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <ul className={classes.ul}>
        <li>Home</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
