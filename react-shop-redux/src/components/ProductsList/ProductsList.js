import React from "react";

import styles from "./ProductsList.module.css";

import Product from "components/Product/Product";
import ProductContainer from "../../container/ProductContainer";

const ProductsList = ({ product, addProduct }) => (
  <div className={styles.Products}>
    {product.map(e => (
      <ProductContainer key={e.id} {...e} />
    ))}
  </div>
);

export default ProductsList;
