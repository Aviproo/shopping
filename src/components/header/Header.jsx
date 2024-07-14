import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.div}>
        <div className={classes.shop}>ShoppiKa 🛍️ </div>
        <div className={classes.man}>🚶‍♂️</div>
      </div>
    </>
  );
};

export default Header;
