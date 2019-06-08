import React, { useEffect } from "react";

import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsList/ProductsList";
import styles from "./CatalogPage.module.css";
import Filters from "./components/Filters/Filters";

// import { fetchProducts } from "../../actions/actions";
const CatalogPage = ({
  product,
  isLoading,
  isError,
  fetchProductsWithRedux
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

  return (
    <>
      <HeaderBig>Catalog</HeaderBig>

      <div className={styles.Catalog}>
        <div className={styles.ColumnLeft}>
          {/* {
            <Filters
            // initValue={}
            // onChange={}
            // manufacturers={}
            />
          } */}
        </div>

        <div className={styles.ColumnRight}>
          <ProductsList product={product} />
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
