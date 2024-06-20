import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

export default store = configureStore({
   reducer: {
      cart: cartReducer
   }
});