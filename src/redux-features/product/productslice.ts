import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import axios from "axios"
import { STATUS } from "../../constants/AppConstants";


const baseUrl="https://fakestoreapi.com/"


export interface Rating {
    rate: number;
    count: number;
}

export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface ProductsDetails{
    status:string,
    products:Products[],
    filterProducts:Products[],
    category:number
}

const initialState:ProductsDetails={
    status:"",
    products:[],
    filterProducts:[],
    category:0
}

const productSlice:Slice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
  reducers:{
    filterCategory(state, action) {
      state.filterProducts=state.products.filter((product:Products)=>{
       return product.category===action.payload.category
      })
    },
    updateCategoryId(state,action)
    {
       state.category=action.payload;
    }
  }
});

//fetching product using build in thunk on toolkit

export const fetchProductList=createAsyncThunk("fetch/products",async()=>{
    const data=axios.get(`${baseUrl}products`).then((res)=>res.data);
    return data;
});

export const {
  filterCategory,
  updateCategoryId
} = productSlice.actions;

export default productSlice.reducer;