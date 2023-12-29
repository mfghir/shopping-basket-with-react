/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

// import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";

import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

const ProductsPage = () => {
  // const products = useProducts();
  const products = [];
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");

  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>

        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;
