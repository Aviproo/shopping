import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./product.module.css";

const Product = () => {
  const [data, setData] = useState([]); // Array to store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API URL
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result); // Store data in the array
    } catch (err) {
      setError(err.message); // Handle errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.div}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading &&
        !error &&
        data.map((item, index) => (
          <div key={item.id} className={classes.innerDiv}>
            <img src={item.image} className={classes.img} />
            <div className={classes.dics}>
              <div className={classes.category}>{item.category}</div>
              <div className={classes.price}>
                <div className={classes.money}>
                  <span className={classes.rupee}>₹</span>
                  {item.price}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
