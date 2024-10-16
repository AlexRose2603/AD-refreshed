import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://test.svdevsoft.com/admin-area";
// axios.defaults.baseURL = "https://addriverclub.com/admin-area";

export const fetchUrl = createAsyncThunk(
  "api/Shop/JoinTheClub",
  async ({ tariff, accessToken }, thunkAPI) => {
    try {
      const headers = { Authorization: accessToken };
      console.log("Access Token:", accessToken);
      console.log("headers", headers);

      const response = await axios.post(
        "/api/Shop/JoinTheClub",
        { id: tariff.id },
        { headers }
      );

      localStorage.setItem("accessToken", accessToken);
      return response.data;
    } catch (error) {
      console.error("Error fetching URL Fetch:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchReferenceNumber = createAsyncThunk(
  "api/OrderReferences/OrderReferenceStatus",
  async (_, thunkAPI) => {
    try {
      const orderReferenceNumberWithAD =
        thunkAPI.getState().paymentUrl.data.orderReferenceNumber;

      const orderReferenceNumber = orderReferenceNumberWithAD.replace(
        /^AD/,
        ""
      );

      console.log("orderReferenceNumber", orderReferenceNumber);

      const response = await axios.post(
        "/api/OrderReferences/OrderReferenceStatus",
        { orderReferenceNumber }
      );
      console.log("response.dataURL", response.data);

      const status = response.data.status;

      return status;
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
