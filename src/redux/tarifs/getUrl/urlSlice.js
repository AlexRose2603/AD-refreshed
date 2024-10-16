import { createSlice } from "@reduxjs/toolkit";
import { fetchUrl } from "./operation";

export const initialUrl = {
  data: {
    url: "",
    orderReferenceNumber: "",
  },
  isLoading: false,
  error: null,
};

const urlSlice = createSlice({
  name: "paymentUrl",
  initialState: initialUrl,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUrl.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUrl.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = {
          url: action.payload.url,
          orderReferenceNumber: action.payload.orderReferenceNumber,
        };
        state.error = null;
      })
      .addCase(fetchUrl.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : "Failed to fetch URL";
        console.error("Error fetching URL Slice:", action.error);
      });
  },
});

export default urlSlice.reducer;
