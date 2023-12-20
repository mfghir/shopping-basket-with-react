/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import { ImSearch } from "react-icons/im";

import { FaListUl } from "react-icons/fa";

const ProductsPage = () => {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const searchHandler = () => {};

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase()
    if (tagName !== "LI") return
  };

  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>

        <div>
          <div className="">
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelry</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
