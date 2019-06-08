export const ACTION_TYPES = {
  PRODUCT_FETCH: "PRODUCT_FETCH",
  PRODUCT_FETCH_SUCCESS: "PRODUCT_FETCH_SUCCESS",
  PRODUCT_FETCH_ERROR: "PRODUCT_FETCH_ERROR"
};

export function fetchProduct(product) {
  return {
    type: ACTION_TYPES.PRODUCT_FETCH,
    product
  };
}

export function fetchProductSuccess(product) {
  return {
    type: ACTION_TYPES.PRODUCT_FETCH_SUCCESS,
    product
  };
}

export function fetchProductError(product) {
  return {
    type: ACTION_TYPES.PRODUCT_FETCH_ERROR
  };
}

export function getProducts(product) {
  return async dispatch => {
    try {
      dispatch(fetchProduct());
      const response = await fetch(
        "https://api.jsonbin.io/b/5cf311bee36bab4cf3101423"
      );
      const data = await response.json();
      const [product] = data.results;

      dispatch(fetchProductSuccess(product));
      console.log(product);
    } catch (e) {
      dispatch(fetchProductError());
    }
  };
}
