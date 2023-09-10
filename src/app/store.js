import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import productReducer from "../slices/productSlice";
import wishlistReducer from "../slices/wishlistSlice";


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productReducer,
    wishlist: wishlistReducer,
  },
});
