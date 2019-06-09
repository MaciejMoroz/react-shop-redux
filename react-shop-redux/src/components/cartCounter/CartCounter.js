import React from "react";
import styles from "./CartCounter.module.css";

import store from "../../store/store";

const CartCounter = () => {
  let storeItems = store.getState();
  let cartLength = storeItems.cartItems.length;
  return <p className={styles.CartCounter}>{cartLength}</p>;
};

export default CartCounter;
