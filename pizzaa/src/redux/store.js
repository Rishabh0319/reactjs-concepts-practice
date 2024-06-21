import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import categorySlice from './slices/categorySlice';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      category: categorySlice
   }
});