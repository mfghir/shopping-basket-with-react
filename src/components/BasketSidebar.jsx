/* eslint-disable react/prop-types */
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./BasketSidebar.module.css";

const BasketSidebar = ({ state, clickHandler }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total: </p>
        <span>{state.total} $</span>
      </div>

      <div>
        <FaHashtag />
        <p>Quantity: </p>
        <span>{state.itemsCounter}</span>
      </div>

      <div>
        <BsPatchCheck />
        <p>Status: </p>
        <span>{!state.checkout && "pending..."}</span>
      </div>

      <button onClick={() => clickHandler("CHECKOUT")}>Checout</button>
    </div>
  );
};

export default BasketSidebar;
