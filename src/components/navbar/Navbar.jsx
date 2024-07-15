import React from "react";
import classes from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../pages/Product";

const Navbar = () => {
  const product = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  function getData() {}
  return (
    <div className={classes.main}>
      <ul className={classes.ul}>
        <Link to="/" className={classes.link}>
          <li onClick={getData}>Home</li>
        </Link>
        <Link to="/product" className={classes.link}>
          <li onClick={getData}>Product</li>
        </Link>
        <Link to="/contact" className={classes.link}>
          <li onClick={getData}>Contact Us</li>
        </Link>
        <Link to="/career" className={classes.link}>
          <li onClick={getData}>Career</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
