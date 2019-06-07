import { connect } from "react-redux";

import ProductsList from "../components/ProductsList/ProductsList";

import { fetchRandomProduct } from "../action/action";

const mapStateToProps = state => ({
  product: state.product,
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = {
  fetchRandomProduct
};

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);

export default ProductContainer;
