import React, { useEffect } from "react";

import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsList/ProductsList";
import styles from "./CatalogPage.module.css";
// import Filters from "./components/Filters/Filters";

const CatalogPage = ({
  product,
  isLoading,
  isError,
  fetchProductsWithRedux,
  addProduct
}) => {
  useEffect(() => {
    fetchProductsWithRedux();
  }, []);

  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // let handleFilterChange = product => {
  //   let fitredProduct;

  //   return fitredProduct;
  // };

  return (
    <>
      <HeaderBig>Catalog</HeaderBig>

      <div className={styles.Catalog}>
        <div className={styles.ColumnLeft}>
          {/* <Filters
            initValue={product.initFilters}
            onChange={handleFilterChange}
            manufacturers={product.manufacturers}
          /> */}
        </div>

        <div className={styles.ColumnRight}>
          <ProductsList product={product} />
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
