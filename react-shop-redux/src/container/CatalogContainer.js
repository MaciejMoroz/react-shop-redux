import { connect } from "react-redux";

import CatalogPage from "../pages/Catalog/CatalogPage";

import { getProducts } from "../actions/actions";

const mapStateToProps = state => ({
  product: state.product,
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = {
  getProducts
};

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage);

export default ProductContainer;
