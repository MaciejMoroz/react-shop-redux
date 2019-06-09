import React from "react";

import styles from "./ProductsList.module.css";

import ProductContainer from "../../container/ProductContainer";

const ProductsList = ({ product, addProduct, name, manufacture }) => {
  const searchTextLower = name.toString().toLowerCase();
  console.log(product);

  const productsFiltred = product.filter(product =>
    product.name.toLowerCase().includes(searchTextLower)
  );

  const manufactureLower = manufacture;
  const filtredProducts = productsFiltred.filter(product =>
    product.manufacture.toLowerCase().includes(manufactureLower)
  );

  return (
    <div className={styles.Products}>
      {filtredProducts.map(e => (
        <ProductContainer key={e.id} {...e} />
      ))}
    </div>
  );
};

export default ProductsList;
