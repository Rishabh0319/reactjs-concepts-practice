import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
       addToCart: (state,action)=>{
          state.cart.push(action.payload);
       },
       removeFromCart: (state,action)=>{
          state.cart = state.cart.filter((item)=>item.id !== action.payload);
       },
       increaseQty:(state,action)=>{
         state.cart = state.cart.map((item)=> item.id === action.payload ? {...item, qty: item.qty + 1} : item)
       },
       decreaseQty:(state,action)=>{
         state.cart = state.cart.map((item)=> item.id === action.payload ? {...item, qty: item.qty - 1} : item)
       }
    }
});

export const {addToCart, removeFromCart, increaseQty, decreaseQty} = cartSlice.actions;

export default cartSlice.reducer;