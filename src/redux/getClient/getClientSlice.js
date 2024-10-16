import { createSlice } from "@reduxjs/toolkit";
import { fetchGetClient } from "./operation";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    accountTypeId: 0,
    accountType: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetClient.fulfilled, (state, action) => {
        state.loading = false;
        state.accountTypeId = action.payload;
        state.accountType = action.payload;
      })
      .addCase(fetchGetClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clientSlice.reducer;
