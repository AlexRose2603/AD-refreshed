import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://test.svdevsoft.com/admin-area";

export const fetchPostOffices = createAsyncThunk(
  "api/Post/Warehouses",
  async (cityRef, thunkAPI) => {
    try {
      const response = await axios.post("/api/Post/Warehouses", {
        cityRef,
        limit: 30,
        pageNumber: 1,
        warehouseId: "",
      });

      console.log("CITY REF:", cityRef);
      console.log("FETCH POST OFFICES RESPONSE:", response);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching post offices:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
