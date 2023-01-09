import { Container } from "@mui/material";
import { useEffect } from "react";
import { STATUS } from "../../Constants/AppConstants";
import { useAppDispatch, useAppSelector } from "../../redux-features/product/products-hooks";
import { fetchProductList, Products } from "../../redux-features/productslice";
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

    useEffect(()=>{
        dispatch(fetchProductList())
    },[])
   
    if (status === STATUS.LOADING) {
        return <Loader />;
      }
    
      if (status !== STATUS.LOADING && status === STATUS.ERROR) {
        return <h2>{status}</h2>;
      }
    
      return (
        <div className={styles.productListWrapper} id="product-list">
          <Container>
            <div className={styles.searchWrapper}>
              <div>
                <h3>Shop by Collection</h3>
                <p>
                  Each season, we collaborate with world class designers to create a
                  collection inspired by natural world.
                </p>
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
                  return <ProductCardDetailsUI key={product?.id} product={product} />;
                })}
            </div>
          </Container>
        </div>
      );
}

export default ProductList;