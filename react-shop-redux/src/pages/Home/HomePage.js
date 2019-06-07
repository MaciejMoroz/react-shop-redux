import React from "react";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";

import ProductService from "services/ProductService";
// import ProductsList from "components/ProductsList/ProductsList";
import ProductsContainer from "container/ProductContainer.js";

const featuredDesktop = ProductService.getProductsByFilter({
  category: "desktop",
  featured: true
});

const featuredTablet = ProductService.getProductsByFilter({
  category: "tablet",
  featured: true
});

const ProductsSection = ({ title, products }) => (
  <>
    <HeaderSmall>{title}</HeaderSmall>
    <ProductsContainer products={products} />
  </>
);

const HomePage = () => (
  <>
    <HeaderBig>Welcome to our store</HeaderBig>
    <ProductsSection title="Desktops" products={featuredDesktop} />
    <ProductsSection title="Tablets" products={featuredTablet} />
  </>
);

export default HomePage;
