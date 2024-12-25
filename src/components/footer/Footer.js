import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.main}>
      <div>
        <div className={classes.head}>Grocery</div>
        <div>Rice</div>
        <div>Aata</div>
        <div>Dal</div>
        <div>Oil</div>
        <div>Fruits</div>
      </div>
      <div>
        <div className={classes.head}>Men Cloths</div>
        <div>T-Shirts</div>
        <div>Pants</div>
        <div>Shirts</div>
        <div>Shoes</div>
        <div>jeans</div>
      </div>
      <div>
        <div className={classes.head}>Womens Cloths</div>
        <div>Sari</div>
        <div>Jeans</div>
        <div>T-Shirts</div>
        <div>Shoes</div>
        <div>Skirts</div>
      </div>
    </div>
  );
};

export default Footer;
