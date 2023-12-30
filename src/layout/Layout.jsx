/* eslint-disable react/prop-types */
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  // const { state } = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {/* {!!state.itemsCounter && <span>{state.itemsCounter}</span>} */}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by 💙</p>
      </footer>
    </>
  );
};

export default Layout;
