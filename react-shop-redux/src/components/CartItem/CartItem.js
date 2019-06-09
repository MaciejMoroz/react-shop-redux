import React, { Component } from "react";
import styles from "./CartItem.module.css";

class ProductInCart extends Component {
  render() {
    const { id, name, image, amount, removeProduct } = this.props;
    return (
      <>
        <div className={styles.Product}>
          <img className={styles.Image} src={image} alt={name} />
          <p className={styles.Price}>${amount}</p>
          <h3>{name}</h3>
          <button onClick={() => removeProduct(id)} className={styles.Button}>
            X
          </button>
        </div>
      </>
    );
  }
}

export default ProductInCart;
