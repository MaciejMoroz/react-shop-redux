import { connect } from "react-redux";

import CartPage from "../pages/Cart/CartPage";
import { addProduct } from "../actions/cartActions";

const mapDispatchToProps = {
  addProduct
};

const CartPageContainer = connect(
  null,
  mapDispatchToProps
)(CartPage);

export default CartPageContainer;
