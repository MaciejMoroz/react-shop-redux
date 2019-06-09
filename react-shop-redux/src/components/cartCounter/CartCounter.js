import React from "react";
import styles from "./CartCounter.module.css";

const CartCounter = ({ cartLength }) => {
  console.log(cartLength);

  if (cartLength === 0) {
    return <p className={styles.Hidden}>{cartLength}</p>;
  } else {
    return <p className={styles.CartCounter}>{cartLength}</p>;
  }
};

export default CartCounter;
