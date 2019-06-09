import React from "react";
import styles from "./Product.module.css";

const Product = ({
  isError,
  isLoading,
  id,
  name,
  image,
  amount,
  addProduct
}) => {
  let handleAddProductToCart = (name, image, amount) => {
    addProduct(id, name, image, amount);
  };
  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <div className={styles.Product}>
          <img className={styles.Image} src={image} alt={name} />
          <p className={styles.Price}>${amount}</p>
          <h3>{name}</h3>
          <button
            className={styles.Button}
            onClick={() => handleAddProductToCart(name, image, amount)}
          >
            Buy
          </button>
        </div>
      </>
    );
  }
};

export default Product;
