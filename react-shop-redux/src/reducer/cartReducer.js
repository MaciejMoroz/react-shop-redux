import { ACTION_TYPES } from "../actions/cartActions";

const cartReducer = (productsInCart = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT_TO_CART:
      return [...productsInCart, action.product];

    case ACTION_TYPES.REMOVE_BOO:
      return productsInCart.filter(product => product.id !== action.productId);
    default:
      return productsInCart;
  }
};

export default cartReducer;
