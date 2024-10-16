import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://test.svdevsoft.com/admin-area";

export const fetchProducts = createAsyncThunk(
  "api/Products",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/Products");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
