import React from "react";
import { useSelector } from "react-redux";
import classes from "./product.module.css";

const Product = () => {
  const allProduct = useSelector((item) => item.product.data);
  console.log(allProduct);
  return (
    <div className={classes.div}>
      {allProduct.map((item) => {
        return (
          <div key={item.id} className={classes.innerDiv}>
            <img src={item.image} className={classes.img} />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
