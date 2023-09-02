import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import favoriteReducer from "../slices/favoriteSlice";


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    favorite: favoriteReducer,
  },
});
