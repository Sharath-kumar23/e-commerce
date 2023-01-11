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
import { withSnackbar } from "../snackbar/snackbar";
import { Button } from "react-bootstrap";
import { ButtonProps, styled } from "@mui/material";
import { purple } from "@mui/material/colors";

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

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#9c27b0',
    borderRadius: "20px",
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

 

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
        <ColorButton variant="contained"  onClick={()=>{handleClickOpen(product);}}>
          Add to Cart
        </ColorButton>
      </CardActions>
    </Card>
  );
};

export default memo(ProductCardDetailsUI);
