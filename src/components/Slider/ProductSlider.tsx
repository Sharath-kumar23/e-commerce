import React, { FC, useLayoutEffect, useState } from "react";
import Loader from "../Loader/Loader";
import useFetch from "../../services/useFetch";
import ProductCard from "../ProductCard/ProductCardDetails";
import { ResponseModel } from "../ProductDetail/ProductDetail";

type categories={
  category:string
}

const ProductSlider:FC<categories> = ( {category}) => {

  const handleClickOpen = () => {
    
   };

  const [size, setSize] = useState<number | undefined>();
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  //fetch slider data according to category
  const { data, error, loading }:ResponseModel = useFetch(`/category/${category}`);
console.log("data  ",data)
  if (!error && loading) {
    return <Loader />;
  }
  if (!loading && error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div className="container py-3" >
      <div style={{display: "inline-flex",gap:50}}>
        {
        data?.map((product:any) => {
          return <ProductCard handleClickOpen={handleClickOpen}  product={product} key={product.id} />;
        })}
      </div> 
    </div>
  );
};

export default React.memo(ProductSlider);
