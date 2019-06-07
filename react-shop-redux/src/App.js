import React from "react";

import { Provider } from "react-redux";
import store from "./store/store";
// import PropTypes from "prop-types";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";

import AboutPage from "pages/About/AboutPage";
import CatalogPage from "pages/Catalog/CatalogPage";
import HomePage from "pages/Home/HomePage";

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
        </Container>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
