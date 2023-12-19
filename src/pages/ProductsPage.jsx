import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>loading</p>}
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductsPage;
