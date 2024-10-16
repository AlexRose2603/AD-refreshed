import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operationsStore";

export const initialProducts = {
  data: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "productsList",
  initialState: initialProducts,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.error(action.error);
      });
  },
});

export default productsSlice.reducer;
