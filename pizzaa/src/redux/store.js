import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import categorySlice from './slices/categorySlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      category: categorySlice,
      search: searchSlice
   }
});