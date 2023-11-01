import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveForLaterItems: [], // Array to store items for later
};

const saveForLaterSlice = createSlice({
  name: "saveForLater",
  initialState,
  reducers: {
    addToSaveForLater: (state, action) => {
      state.saveForLaterItems.push(action.payload); // Add product to save for later
    },
    removeFromSaveForLater: (state, action) => {
      state.saveForLaterItems = state.saveForLaterItems.filter(
        (item) => item.id !== action.payload.id,
      ); // Remove product from save for later
    },
  },
});

export const { addToSaveForLater, removeFromSaveForLater } =
  saveForLaterSlice.actions;
export const selectSaveForLaterItems = (state) =>
  state.saveForLater.saveForLaterItems;
export default saveForLaterSlice.reducer;
