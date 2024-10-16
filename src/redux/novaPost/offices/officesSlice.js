import { createSlice } from "@reduxjs/toolkit";
import { fetchPostOffices } from "./operations";

export const initialPostOffices = {
  data: [],
  isLoading: false,
  error: null,
};

const officesSlice = createSlice({
  name: "novaPostOffices",
  initialState: initialPostOffices,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostOffices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPostOffices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchPostOffices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.error(action.error);
      });
  },
});

export default officesSlice.reducer;
