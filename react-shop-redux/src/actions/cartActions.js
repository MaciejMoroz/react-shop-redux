export const ACTION_TYPES = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART"
  // CART_LENGTH: "CART_LENGTH"
};
export const addProduct = (id, name, image, amount) => ({
  type: ACTION_TYPES.ADD_PRODUCT_TO_CART,
  productInCart: {
    id: id,
    name: name,
    image: image,
    amount: amount
  }
});

export const removeProduct = productId => ({
  type: ACTION_TYPES.REMOVE_PRODUCT_FROM_CART,
  productId
});
