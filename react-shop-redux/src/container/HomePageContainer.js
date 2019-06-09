import { connect } from "react-redux";

import HomePage from "../pages/Home/HomePage";

import { fetchProductsWithRedux } from "../actions/productsActions";

const mapStateToProps = state => ({
  product: state.products.product,
  isLoading: state.products.isLoading,
  isError: state.products.isError
});

const mapDispatchToProps = {
  fetchProductsWithRedux
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
