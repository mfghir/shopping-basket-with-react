/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";

import styles from "./Card.module.css";

const Card = ({ data }) => {
  const { id, title, image, price } = data;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>

      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>

        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
};

export default Card;
