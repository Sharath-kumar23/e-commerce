import { Container } from "@mui/material";
import { useEffect } from "react";
import { STATUS } from "../../Constants/Status";
import { useAppDispatch, useAppSelector } from "../../redux-features/product/products-hooks";
import { fetchProductList, Products } from "../../redux-features/productslice";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productlist.module.scss"
const ProductList =()=>{

    const dispatch= useAppDispatch();

    const {status, products}=useAppSelector((state)=>state.products)

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
                {/* {showSearch && (
                  <input
                    type="text"
                    className={styles.searchBar}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search Product"
                  />
                )}
                <BiSearch
                  size={25}
                  onClick={() => setShowSearch(!showSearch)}
                  style={{ cursor: "pointer" }}
                /> */}
              </div>
            </div>
            <div className={styles.productList}>
              {products
                ?.filter((item:Products) =>
                  item.title.toLowerCase().includes("")
                )
                ?.map((product:Products) => {
                  return <ProductCard key={product?.id} product={product} />;
                })}
            </div>
          </Container>
        </div>
      );
}

export default ProductList;