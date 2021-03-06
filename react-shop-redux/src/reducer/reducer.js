import { combineReducers } from "redux/es/redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  products: productReducer,
  cartItems: cartReducer
});
