import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [], // Array to store wishlist items
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload); // Add product to wishlist
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id,
      ); // Remove product from wishlist
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlistItems = (state) => state.wishlist.wishlistItems;
export default wishlistSlice.reducer;
