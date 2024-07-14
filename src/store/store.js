import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "../store/slices/storeSlice";

export const store = configureStore({
  reducer: { product: StoreReducer },
});
