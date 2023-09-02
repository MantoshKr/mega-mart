
import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [], // Your product data here
    searchQuery: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
export const selectSearchQuery = (state) => state.products.searchQuery;


export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
