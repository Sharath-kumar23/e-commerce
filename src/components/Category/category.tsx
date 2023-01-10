import { Box } from "@mui/material";
import React, { useState } from "react";
import cat1 from "../../assests/cat1.webp";
import cat2 from "../../assests/cat2.webp";
import cat3 from "../../assests/cat3.webp";
import cat4 from "../../assests/cat4.webp";
import { useAppDispatch } from "../../redux-features/product/products-hooks";
import { filterCategory } from "../../redux-features/product/productslice";
import styles from "./category.module.scss";



const Caterogry = () => {

  const dispatch= useAppDispatch();

  const updateCategory=async (category:string,id:number)=>{
    setCategoryId(id)
    dispatch(filterCategory({category}))
  }

  const [categoryId,setCategoryId]=useState(0)

  const categories = [
    {
      img: cat1,
      name: "electronics",
      id: 1,
    },
    {
      img: cat2,
      name: "jewelery",
      id: 2,
    },
    {
      img: cat3,
      name: "men's clothing",
      id: 3,
    },
    {
      img: cat4,
      name: "women's clothing",
      id: 4,
    },
  ];

  
  return (
    <Box  className={`${styles.container}`}>
      <div className={`${styles.containerBorder}`}>
      <div style={{display:"inline-block"}}>
      <h3 className={`${styles.textColor}`}>Shop by Category</h3>
      </div>
      <div className={`${styles.categoryWrapper}`}>
        {categories.map((Category) => {
          return (
            <div  key={Category.id} onClick={()=>updateCategory(Category.name,Category.id)}>
              <div
                className="category"
                style={{
                  background: `linear-gradient(rgba(20,20,20, 0.3),rgba(20,20,20, .3)), url(${Category.img}) no-repeat`,
                  backgroundSize: "cover",
                  border: categoryId===Category.id?"1px solid blue":"",
                }}
              >
                <h5 className={`${styles.textColor}`}>
                  {Category.name.toUpperCase()}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
      </div>
     
    </Box>
  );
};

export default Caterogry;
