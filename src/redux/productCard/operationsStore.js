import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://test.svdevsoft.com/admin-area";

export const fetchProductCard = createAsyncThunk(
  "api/Products/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/Products/${id}`);
      console.log(response);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
