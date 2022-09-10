import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../slice/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
