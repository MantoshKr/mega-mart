// favoriteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteProducts: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const productId = action.payload;
      if (!state.favoriteProducts.includes(productId)) {
        state.favoriteProducts.push(productId);
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      state.favoriteProducts = state.favoriteProducts.filter(id => id !== productId);
    },
  },
}); 

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const selectFavoriteProducts = state => state.favorite.favoriteProducts;

export default favoriteSlice.reducer;
