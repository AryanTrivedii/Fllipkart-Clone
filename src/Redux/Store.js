// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../Redux/Productaction'; // Correct the import path
import cartSlice from'../Redux/Cartaction'
const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice
    },
});

export default store;
