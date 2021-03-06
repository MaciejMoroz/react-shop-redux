import { connect } from "react-redux";

import catalogPage from "../pages/Catalog/CatalogPage";

import {
  fetchProductsWithRedux,
  uniqueManufacturers
} from "../actions/productsActions";

const mapStateToProps = state => ({
  product: state.products.product,
  isLoading: state.products.isLoading,
  isError: state.products.isError,
  addProduct: state.cartItems.addProduct,
  uniqueManufacturers: product => uniqueManufacturers(product)
});

const mapDispatchToProps = {
  fetchProductsWithRedux
};

const CatalogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(catalogPage);

export default CatalogContainer;
