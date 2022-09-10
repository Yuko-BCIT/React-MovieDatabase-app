import { createSlice } from "@reduxjs/toolkit";

function getIndex(item, arr) {
  return arr.findIndex((arrItem) => arrItem.id === item.id);
}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      
      state.items = [...state.items, action.payload];
    },
    deleteItem: (state, action) => {
      
      state.items.splice(getIndex(action.payload, state.items), 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = favoritesSlice.actions;
export default favoritesSlice.reducer;
