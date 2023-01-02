import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { amountFormatter } from "../../../../common/utils/amount-standard";

const CartItem = ({
  onPressRemove,
  onPressRemoveAll,
  onPressAdd,
  ...props
}) => {
  return (
    <div className={styles.card}>
      {/* 1st child */}
      <div>
        <img
          className={styles.productImage}
          src={process.env.PUBLIC_URL + props.image}
          alt=""
        />
      </div>

      {/* 2nd child */}
      <div>
        <div>
          <h3 className={styles.productName}>{props.name}</h3>
          {/* Descripcion */}
        </div>

        <div>
          <button className={styles.qtyControl} onClick={onPressRemove}>
            -
          </button>
          <p className={styles.productQty}>{props.qty} Metros</p>
          <button className={styles.qtyControl} onClick={onPressAdd}>
            +
          </button>
        </div>
      </div>

      {/* 3rd child */}
      <div>
        <h4 className={styles.productPrice}>
          {amountFormatter(props.price, props.currency)}
        </h4>
        <FontAwesomeIcon
          size="3x"
          icon={faTrashRestore}
          onClick={onPressRemoveAll}
        />
      </div>
    </div>
  );
};

export default CartItem;
