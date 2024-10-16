import { createSlice } from "@reduxjs/toolkit";
import { fetchTariffs } from "./operations";

export const initialTariffs = {
  data: [],
  isLoading: false,
  error: null,
};

const tariffSlice = createSlice({
  name: "subscription",
  initialState: initialTariffs,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTariffs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTariffs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTariffs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.error(action.error);
      });
  },
});

export default tariffSlice.reducer;
