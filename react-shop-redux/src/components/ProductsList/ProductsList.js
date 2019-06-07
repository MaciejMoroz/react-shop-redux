import React from "react";

import styles from "./ProductsList.module.css";
import ProductContainer from "../../container/ProductContainer";

import Product from "components/Product/Product";

const ProductsList = ({ product }) => (
  <div className={styles.Products}>
    <ProductContainer />

    {product.map(product => (
      <Product key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;
