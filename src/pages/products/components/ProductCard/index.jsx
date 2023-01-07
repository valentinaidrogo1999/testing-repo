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
 
    <Card className="padre" sx={{ maxWidth: 300 }} >
      {product.image && (
        <CardMedia className="image"
          sx={{ height: 120 }}
          image={process.env.PUBLIC_URL + product.image}
        />
      )}

      {/*latter of images*/}
      <div className="container">
      <CardContent className="typo" >
        {product.name && (
          <Typography className="metro"
            gutterBottom
            variant="h6"
            component="div"
            fontFamily="cursive"
            marginTop="10px"
            >
           Metro cuadrado
          
          </Typography>
        )}
      </CardContent>
     
      <CardActions className="price" >
       
        {product.price && (
          <Typography className="precio" color="black">
            {amountFormatter(product.price, product.currency)}
          </Typography>
        )}
        {/*button for cars */}

        <Button className="mas" onClick={onAddProduct}>
          <p className="signo">+</p>
        </Button>
      </CardActions>
      </div>
    </Card>
 
  );
};

export default ProductCard;
