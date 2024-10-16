import { createSlice } from "@reduxjs/toolkit";
import { fetchAddresses } from "./operations";

export const initialCities = {
  data: [],
  isLoading: false,
  error: null,
};

const citiesSlice = createSlice({
  name: "novaPostCities",
  initialState: initialCities,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.error(action.error);
      });
  },
});

export default citiesSlice.reducer;
