import { connect } from "react-redux";

import CartCounter from "../components/cartCounter/CartCounter";

// const getCartItems = state => state.cartItems;

const mapStateToProps = (state, ownProps) => {
  console.log(state.cartItems.length, ownProps);
  return {
    cartLength: Number(state.cartItems.length)
  };
};

const CartCounterContainer = connect(mapStateToProps)(CartCounter);

export default CartCounterContainer;
