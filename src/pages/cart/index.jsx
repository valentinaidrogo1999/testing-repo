import { Fragment, useMemo } from "react";
import Layout from "../../common/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";
import { useCart } from "../../contexts/cart";
import { Typography } from "@mui/material";
import CartItem from "./components/CartItem";
import { amountFormatter } from "../../common/utils/amount-standard";

const CartPage = () => {
  const cart = useCart();

  const productsList = useMemo(() => {
    return Object.values(cart.products);
  }, [cart.products]);

  return (
    <Layout>
      <div className={styles.cotizacion}>
        <h1>Cotizacion del Articulo</h1>
      </div>

      <div className={styles.listaDelCarrito}>
        {productsList.map((singleProductContainer) => (
          <CartItem
            qty={singleProductContainer.length}
            onPressAdd={() => cart.addProduct(singleProductContainer[0])}
            onPressRemove={() =>
              cart.removeProduct(singleProductContainer[0].id)
            }
            onPressRemoveAll={() =>
              cart.removeAllProductReferences(singleProductContainer[0].id)
            }
            {...singleProductContainer[0]}
          />
        ))}

        <div className={styles.cajaMontoTotal}>
          <p>Total: {amountFormatter(cart.totalAmount, "USD")}</p>
          <p className="whatsapp">
            * Serás redireccionado a Whatsapp para terminar tu cotizacion.
          </p>
          {/*boton de whatsapp */}
          <a
            href="https://api.whatsapp.com/send?phone=3203982882"
            target="_blank"
          >
            <button className="cotiza">Cotiza Ahora</button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
