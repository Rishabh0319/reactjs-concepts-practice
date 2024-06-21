import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
       addToCart: (state,action)=>{
         const existingItem = state.cart.find((item)=> item.id === action.payload.id);
         if(existingItem){
            state.cart = state.cart.map((item)=>
              item.id === action.payload.id ? {...item, qty: item.qty + 1} : item
            )
         }else{
            state.cart.push(action.payload);
         }
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