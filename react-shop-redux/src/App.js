import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";
import HomePageContainer from "./container/HomePageContainer";
import AboutPage from "pages/About/AboutPage";
import CatalogPageContainer from "./container/CatalogContainer";
import CartPageContainer from "./container/CartContainer";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      {console.log(store.getState())}
      <Router>
        <>
          <Nav />
          <Container>
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/catalog" component={CatalogPageContainer} />
            <Route path="/about" component={AboutPage} />
            <Route path="/cart" component={CartPageContainer} />
          </Container>
          <Footer />
        </>
      </Router>
    </Provider>
  );
}

export default App;
