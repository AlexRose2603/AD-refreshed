import { createSlice } from "@reduxjs/toolkit";
import { fetchProductCard } from "./operationsStore";

export const initialProductCard = {
  data: [],
  isLoading: false,
  error: null,
};

const productCardSlice = createSlice({
  name: "productCard",
  initialState: initialProductCard,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCard.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.error(action.error);
      });
  },
});
export default productCardSlice.reducer;
