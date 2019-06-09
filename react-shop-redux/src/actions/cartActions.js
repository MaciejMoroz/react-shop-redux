export const ACTION_TYPES = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART"
};
export const addProduct = product => ({
  type: ACTION_TYPES.ADD_PRODUCT_TO_CART,
  productInCart: {
    id: product.id,
    name: product.name,
    image: product.image,
    manufacture: product.manufacture,
    amount: product.amount,
    category: product.category,
    featured: product.featured
  }
});

export const removeProduct = productId => ({
  type: ACTION_TYPES.REMOVE_PRODUCT_FROM_CART,
  productId
});
