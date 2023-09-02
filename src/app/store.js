import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import favoriteReducer from "../slices/favoriteSlice";
import productReducer from "../slices/productSlice";


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    favorite: favoriteReducer,
    products: productReducer,
  },
});
