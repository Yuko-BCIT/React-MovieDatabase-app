import { createSlice } from "@reduxjs/toolkit";

// store favorites to client side local storage
function getFaves() {
  let faveStorage = localStorage.getItem('myfavorites');
  if (faveStorage === null) {
    faveStorage = [];
  } else {
    faveStorage = JSON.parse(faveStorage);
  }
  return faveStorage;
}

function getIndex(item, arr) {
  return arr.findIndex((arrItem) => arrItem.id === item.id);
}


// slice for add remove favorites
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: getFaves(),
  },

  reducers: {
    addItem: (state, action) => {
      const newFaves = [...state.items, action.payload];
      localStorage.setItem('myfavorites', JSON.stringify(newFaves));
      state.items = newFaves;
    },
    deleteItem: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem('myfavorites', JSON.stringify(itemsCopy));
      state.items = itemsCopy;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = favoritesSlice.actions;
export default favoritesSlice.reducer;
