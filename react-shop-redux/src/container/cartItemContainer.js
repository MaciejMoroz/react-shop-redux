import { connect } from "react-redux";

import CartItem from "../components/CartItem/CartItem";

import { removeProduct } from "../actions/cartActions";

const getCartItems = state => state.cartItems;

const mapStateToProps = state => {
  return {
    CartItems: getCartItems(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: id => dispatch(removeProduct(id))
  };
};

const CartItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);

export default CartItemContainer;
