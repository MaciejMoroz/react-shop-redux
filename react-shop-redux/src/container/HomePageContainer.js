import { connect } from "react-redux";

import HomePage from "../pages/Home/HomePage";

import { fetchProductsWithRedux } from "../actions/actions";

const mapStateToProps = state => ({
  product: state.product,
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = {
  fetchProductsWithRedux
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
