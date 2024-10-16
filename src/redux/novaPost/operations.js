import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://test.svdevsoft.com/admin-area";

export const fetchAddresses = createAsyncThunk(
  "api/Post/Adderesses",
  async (searchValue, thunkAPI) => {
    try {
      const response = await axios.post("/api/Post/Adderesses", {
        cityName: searchValue,
        cityRef: "",
        limit: 100,
        pageNumber: 1,
        warehouseId: "",
      });
      console.log("FETCH ADDRESSES RESPONSE", response);
      return response.data.addresses;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
