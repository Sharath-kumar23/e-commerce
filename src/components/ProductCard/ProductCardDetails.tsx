import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Products } from "../../redux-features/product/productslice";
import styles from "./productCard.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { useAppDispatch } from "../../redux-features/product/products-hooks";
import { addToCart } from "../../redux-features/cart/CartSlice";

type ProductDetails = {
  key: number;
  product: Products;
  handleClickOpen:Function,
};

const ProductCardDetailsUI: React.FunctionComponent<ProductDetails> = ({
  product,
  handleClickOpen
}) => {
  const title = product?.title.slice(0, 20);

 

  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300 }} className={styles.productCard}>
      <CardMedia
        className={styles.cardImg}
        component="img"
        height="194"
        sx={{ objectFit: "contain" }}
        src={product.image}
        alt="Paella dish"
        onClick={() => navigate(`/products/${product?.id}`)}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="cart" onClick={()=>{handleClickOpen(product)}}>
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default memo(ProductCardDetailsUI);
