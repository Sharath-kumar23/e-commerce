import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart/CartSlice";
import ProductReducer from "./product/productslice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart:CartSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
