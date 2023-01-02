import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialContext = {
  products: {},
  totalAmount: 0,
  addProduct: (product) => {},
  removeProduct: (productId) => {},
  removeAllProductReferences: (productId) => {},
};

export const CartContext = createContext(initialContext);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(initialContext.products);
  const [totalAmount, setTotalAmount] = useState(initialContext.totalAmount);

  const [open, setOpen] = useState(false);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addProduct = (product) => {
    const productsCopy = { ...products };

    const isExistingProduct = productsCopy[product.id];

    /**
     * {
     *   1: [
     *         {id: 1, name: "Techo 1"},
     *      ],
     *   2: [
     *          {id: 2, name: "Techo 2"},
     *          {id: 2, name: "Techo 2"},
     *      ]
     *  }
     */

    if (isExistingProduct) {
      productsCopy[product.id].push(product);
    } else {
      productsCopy[product.id] = [product];
    }

    setProducts(productsCopy);
    setOpen(true);
  };

  const removeProduct = (productId) => {
    const productsCopy = { ...products };

    productsCopy[productId].pop();

    if (productsCopy[productId].length === 0) {
      delete productsCopy[productId];
    }

    setProducts(productsCopy);
  };

  const removeAllProductReferences = (productId) => {
    const productsCopy = { ...products };

    delete productsCopy[productId];

    setProducts(productsCopy);
  };

  const calculateProductsAmounts = (currentProducts) => {
    const productsSum = Object.values(currentProducts).reduce(
      (productSum, singleProductContainer) => {
        return (
          productSum +
          singleProductContainer[0].price * singleProductContainer.length
        );
      },
      0
    );

    setTotalAmount(productsSum);
  };

  useEffect(() => {
    calculateProductsAmounts(products);
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        // products: products <--- Esto es lo mismo que solo colocar "products"
        products,
        totalAmount,
        addProduct,
        removeProduct,
        removeAllProductReferences,
      }}
    >
      {children}

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          ¡Producto agregado!
        </Alert>
      </Snackbar>
    </CartContext.Provider>
  );
};
