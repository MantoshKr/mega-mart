import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import productReducer from "../slices/productSlice";
import wishlistReducer from "../slices/wishlistSlice";
import saveForLaterReducer from "../slices/saveForLaterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  basket: basketReducer,
  products: productReducer,
  wishlist: wishlistReducer,
  saveForLater: saveForLaterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer: persistedReducer
});


// {
//   basket: basketReducer,
//   products: productReducer,
//   wishlist: wishlistReducer,
//   saveForLater: saveForLaterReducer,
// },