import { connect } from "react-redux";

import CartCounter from "../components/cartCounter/CartCounter";

const mapStateToProps = state => {
  return {
    cartLength: state.cartItems.length,
    pay: state.cartItems.map(e => e.amount * 1).reduce((a, b) => a + b, 0)
  };
};

const CartCounterContainer = connect(mapStateToProps)(CartCounter);

export default CartCounterContainer;
