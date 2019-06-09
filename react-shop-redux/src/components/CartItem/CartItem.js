import React, { Component } from "react";
import styles from "./CartItem.css";

class ProductInCart extends Component {
  render() {
    const { isError, isLoading, name, image, amount } = this.props;

    if (isError) {
      return <h2>Error while loading... :(</h2>;
    }

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return (
      <>
        <div className={styles.Product}>
          <img className={styles.Image} src={image} alt={name} />
          <p className={styles.Price}>${amount}</p>
          <h3>{name}</h3>
          <button className={styles.Button}>X</button>
        </div>
      </>
    );
  }
}

export default ProductInCart;
