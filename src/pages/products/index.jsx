import { Stack, Typography } from "@mui/material";
import Layout from "../../common/components/Layout";
import "./styles/style.css";

import Products from "../../data/products.json";
import ProductCard from "./components/ProductCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import queryString from "query-string";
import { useCart } from "../../contexts/cart";

const ProductsPage = () => {
  const [products, setProducts] = useState(Products);

  const location = useLocation();

  const cart = useCart();

  useEffect(() => {
    if (location.search) {
      const search = queryString.parse(location.search);

      const filteredProducts = Products.filter((product) =>
        product.categories.includes(search.category)
      );

      console.log("Filtro", filteredProducts);

      setProducts(filteredProducts);
    } else {
      setProducts(Products);
    }
  }, [location]);

  return (
    <Layout>
      <Typography
        variant="h3"
        color="#e3e3e3"
        textAlign="center"
        margin="70px 0"
        fontFamily="cursive"
      >
        Productos
      </Typography>

      {/* <Stack spacing={2}>
        <ProductCard name="Prueba de nombre" />
        <ProductCard name="Prueba de nombre 2" />
        <ProductCard name="Prueba de nombre 3" />
      </Stack> */}

      <Stack spacing={2}>
        {products.map((product) => (
          <ProductCard
            onAddProduct={() => cart.addProduct(product)}
            {...product}
          />
        ))}
      </Stack>
    </Layout>
  );
};

export default ProductsPage;
