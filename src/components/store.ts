import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux-features/productslice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
