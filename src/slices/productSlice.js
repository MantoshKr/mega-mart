
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [], // product data here
    searchQuery: "",
    sortBy: "", // Sorting option
    priceRange: { min: 200, max: 100000 }, // Initial price range
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPriceRange: (state, action) => {
      if (action.payload.min <= action.payload.max) {
        state.priceRange = action.payload;
      }
    },
  },
});

export const selectSearchQuery = (state) => state.products.searchQuery;
export const selectSortBy = (state) => state.products.sortBy;
export const selectPriceRange = (state) => state.products.priceRange;

export const { setSearchQuery, setSortBy ,setPriceRange } = productSlice.actions;

const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];

  if (sortBy === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "name") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sortedProducts;
};

export default productSlice.reducer;
