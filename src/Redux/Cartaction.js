// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find(item => item.id === itemToAdd.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
    },
   
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
