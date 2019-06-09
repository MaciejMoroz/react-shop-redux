import { connect } from "react-redux";

import Product from "../components/Product/Product";
import { addProduct } from "../actions/cartActions";

const mapDispatchToProps = {
  addProduct
};

const ProductContainer = connect(
  null,
  mapDispatchToProps
)(Product);

export default ProductContainer;
