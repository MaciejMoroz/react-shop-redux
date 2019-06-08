import React from "react";

import styles from "./ProductsList.module.css";

import Product from "components/Product/Product";

const ProductsList = ({ product }) => (
  <div className={styles.Products}>
    {product.map(e => (
      <Product key={e.id} {...e} />
    ))}
  </div>
);

export default ProductsList;
