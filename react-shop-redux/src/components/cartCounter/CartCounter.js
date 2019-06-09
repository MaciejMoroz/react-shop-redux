import React from "react";
import styles from "./CartCounter.module.css";

const CartCounter = ({ cartLength, pay }) => {
  if (cartLength === 0) {
    return <p className={styles.Hidden}>{cartLength}</p>;
  } else {
    return (
      <div>
        <p className={styles.CartCounter}>{cartLength}</p>
        <p className={styles.Pay}>${pay.toFixed(2)}</p>
      </div>
    );
  }
};

export default CartCounter;
