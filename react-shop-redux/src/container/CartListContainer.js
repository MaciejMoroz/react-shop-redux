import { connect } from "react-redux";

import CartList from "../components/CartItemList/CartList";

import { removeProduct } from "../actions/cartActions";

const getCartItems = state => state.cartItems;

const mapStateToProps = state => {
  return {
    CartItems: getCartItems(state)
  };
};

const CartListContainer = connect(mapStateToProps)(CartList);

export default CartListContainer;
