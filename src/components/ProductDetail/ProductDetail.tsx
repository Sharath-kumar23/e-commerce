import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { addToCart } from "../../redux-features/cart/CartSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import useFetch from "../../Services/useFetch";
import styles from "./productdetail.module.scss";
import ProductSlider from "../Slider/ProductSlider";
import { useAppDispatch } from "../../redux-features/product/products-hooks";

export interface ResponseModel{
  data:any,
  error:any,
  loading:boolean
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, error, loading }:ResponseModel = useFetch(`/${id}`);
  if (!error && loading) {
    return <Loader />;
  }
  if (!loading && error) {
    return <h3>{error.message}</h3>;
  }

  //add product to cart handler
  const productHandler = () => {
    dispatch(addToCart(data));
    toast.success(`${data?.title.slice(0, 20)} is added to cart`, {
      autoClose: 1000,
    });
  };

 

  return (
    <div className={`${styles.detailWrapper} container py-4`} style={{ marginLeft:50}}>
      <h1>{data?.title}</h1>
      <hr className="mb-4" />
      <div className={styles.mainDetailWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={data?.image}
            alt="product-img"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
        <div className="pt-3">
          <h4>{data?.title}</h4>
          <h6 className="text-success">
            {data?.rating.count > 1 && "In Stock"}
          </h6>
          <h6>Category: {data?.category}</h6>
          <p className="py-1">{data?.description}</p>
          <h5>Price: ${data?.price}</h5>
          <button className="btn btn-primary mt-2" onClick={productHandler}>
            Add to Cart
          </button>
        </div>
      </div>
      <hr className="mt-5" />
      <div className={styles.productSliderWrapper}>
        <h4 className="py-2">Products you might also like</h4>
        <div style={{overflowX:"scroll"}}>
        <ProductSlider category={data?.category} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);
