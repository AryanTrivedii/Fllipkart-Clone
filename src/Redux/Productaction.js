// src/redux/ProductSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsdata = createAsyncThunk('products/productsdata', async () => {
  const response = await axios.get('http://localhost:5000/api/getproducts'); 
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsdata.pending, (state) => {
        state.loading = true;
      })
      .addCase(productsdata.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(productsdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
