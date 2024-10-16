import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://test.svdevsoft.com/admin-area";
// axios.defaults.baseURL = "https://addriverclub.com/admin-area";

export const fetchTariffs = createAsyncThunk(
  "api/ClubCardTypes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/ClubCardTypes");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
