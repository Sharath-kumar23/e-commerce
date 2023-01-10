import React from "react";
import styles from "./cart.module.scss";
import {
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} from "../../redux-features/cart/CartSlice";

import { useAppDispatch, useAppSelector } from "../../redux-features/product/products-hooks";
import {  Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Button } from "react-bootstrap";

const Cart = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart);

  //calculate total price
  const totalPrice = products.cart.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );

  //remove product handler
  const removeProductHandler = (product:any) => {
    dispatch(removeFromCart(product));
  };

  //remove all product handler
  const removeAllProduct = () => {
    dispatch(removeAll());
  };


  return (
    <Stack sx={{marginTop:10}}>
      { products?.cart?.map((product) => {
         return (
    <Card key={product.id} className={styles.cartCard} sx={{ minWidth: 275,width:"100%" }}>
      <CardContent sx={{width:"100%"}}>
      <Stack direction="row" spacing={2}  justifyContent="space-around" alignItems="stretch"
  >
        <CardMedia
        component="img"
        sx={{ width: 50,heigh:50 }}
        src={product.image}
        alt="Live from space album cover"
      />
      <Typography style={{ maxWidth: "180px" }}>
                 {product.title.slice(0, 20)}
               </Typography>
               <Typography>${product.price}</Typography>

                        <div className="cartBtns">
               <Button
                 className={`${styles.cartBtn} fw-bold`}
                 onClick={() => dispatch(incrementProduct(product))}
              >
                +
              </Button>
               <Typography>{product.quantity}</Typography>
               <Button
                 className={`${styles.cartBtn} fw-bold`}
                 onClick={() => dispatch(reduceProduct(product))}
              >
                 -
               </Button>
            </div>
            <div>
               <Typography>${(product.price * product.quantity).toFixed(2)}</Typography>
               <Button
                className="btn btn-danger"
                onClick={() => {
                  removeProductHandler(product);
                }}
               >
                 remove
               </Button>
             </div>
        </Stack>
      </CardContent>
      </Card>)})}
         <hr />
       <div className="mb-5 d-flex justify-content-between">
        <Button className={styles.cartBtn} onClick={removeAllProduct}>
           Remove All items
         </Button>
         <Typography>
           Total Price: <b>${totalPrice.toFixed(2)}</b>
         </Typography>
      </div>
    
      </Stack>
  );
};

export default Cart;
