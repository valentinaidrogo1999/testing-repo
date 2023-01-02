import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../ProductCard/style.css";
import { amountFormatter } from "../../../../common/utils/amount-standard";

const ProductCard = ({ onAddProduct, ...product }) => {
  const agregarAlCarrito = () => {
    console.log("Producto para agregar al carrito", product);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      {product.image && (
        <CardMedia
          sx={{ height: 120 }}
          image={process.env.PUBLIC_URL + product.image}
        />
      )}

      {/*latter of images*/}
      <CardContent>
        {product.name && (
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontFamily="cursive"
          >
            Metro cuadrado
          </Typography>
        )}
      </CardContent>

      <CardActions>
        {product.price && (
          <Typography color="black">
            {amountFormatter(product.price, product.currency)}
          </Typography>
        )}
        {/*button for cars */}

        <Button onClick={onAddProduct}>
          <p className="signo">+</p>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
