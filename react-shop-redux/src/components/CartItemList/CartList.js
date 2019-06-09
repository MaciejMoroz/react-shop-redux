import React from "react";

import styles from "./CartList.module.css";

import CartItem from "components/CartItem/CartItem";

const CartList = ({ product }) => (
  <div className={styles.Products}>
    {product.map(e => (
      <CartItem key={e.id} {...e} />
    ))}
  </div>
);

export default CartList;
