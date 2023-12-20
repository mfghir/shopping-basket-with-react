import styles from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
};

export default Loader;
