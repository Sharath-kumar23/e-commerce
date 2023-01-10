import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { STATUS } from "../../constants/AppConstants";
import { addToCart } from "../../redux-features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "../../redux-features/products-hooks";
import { fetchProductList, Products } from "../../redux-features/product/productslice";
import Loader from "../Loader/Loader";
import ProductCardDetailsUI from "../ProductCard/ProductCardDetails";
import styles from "./productlist.module.scss"
const ProductList =()=>{

    const dispatch= useAppDispatch();

    let {status,products, filterProducts}=useAppSelector((state)=>state.products)
   // debugger
    if(filterProducts.length===0)
    {
      filterProducts=[...products]
    }
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        dispatch(fetchProductList())
    },[])
   
    if (status === STATUS.LOADING) {
        return <Loader />;
      }
    
      if (status !== STATUS.LOADING && status === STATUS.ERROR) {
        return <h2>{status}</h2>;
      }

    const handleClickOpen = (product?:any) => {
    dispatch(addToCart(product))
    setOpen(true);
   };

  const handleClose = () => {
    setOpen(false);
  };
    
      return (
        <div className={styles.productListWrapper} id="product-list">
          <Container>
            <div className={styles.searchWrapper}>
              <div>
                <Typography variant="h4">Shop by Collection</Typography>
                <Typography variant="body2">
                  Each season, we collaborate with world class designers to create a
                  collection inspired by natural world.
                </Typography>
              </div>
              <div>
              </div>
            </div>
            <div className={styles.productList}>
              {filterProducts
                ?.filter((item:Products) =>
                  item.title.toLowerCase().includes("")
                )
                ?.map((product:Products) => {
                  return <ProductCardDetailsUI handleClickOpen={handleClickOpen}  key={product?.id} product={product} />;
                })}
            </div>
          </Container>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"CART"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to add item to the cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      );
}

export default ProductList;