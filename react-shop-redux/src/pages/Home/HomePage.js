import React, { useEffect } from "react";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";
import ProductsList from "components/ProductsList/ProductsList";

const HomePage = ({ product, isLoading, isError, fetchProductsWithRedux }) => {
  useEffect(() => {
    fetchProductsWithRedux();
  }, []);

  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const getProductsByFilter = ({ name, category, manufacture, featured }) => {
    let results = product;
    if (name && name.length) {
      const searchText = name.toLowerCase();
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchText)
      );
    }

    if (category) {
      results = results.filter(product => product.category === category);
    }

    if (manufacture) {
      results = results.filter(product => product.manufacture === manufacture);
    }

    if (featured) {
      results = results.filter(product => product.featured === featured);
    }

    return results;
  };

  const featuredDesktop = getProductsByFilter({
    category: "desktop",
    featured: true
  });

  const featuredTablet = getProductsByFilter({
    category: "tablet",
    featured: true
  });

  const ProductsSection = ({ title, product }) => (
    <>
      <HeaderSmall>{title}</HeaderSmall>
      <ProductsList product={product} />
    </>
  );
  return (
    <>
      <HeaderBig>Welcome to our store</HeaderBig>
      <ProductsSection title="Desktops" product={featuredDesktop} />
      <ProductsSection title="Tablets" product={featuredTablet} />
    </>
  );
};

export default HomePage;
