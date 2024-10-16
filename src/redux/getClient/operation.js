import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://test.svdevsoft.com/admin-area";
// axios.defaults.baseURL = "https://addriverclub.com/admin-area";

export const fetchGetClient = createAsyncThunk(
  "api/Clients/GetClient",
  async (accessToken, thunkAPI) => {
    try {
      const headers = { Authorization: accessToken };
      console.log("Access Token Get client:", accessToken);
      console.log("headers get client", headers);

      const response = await axios.get("api/Clients/GetClient", { headers });
      console.log("Response for client info", response.data);
      const { accountTypeId, accountType } = response.data;
      console.log("accountTypeId", accountTypeId);
      console.log("accountType in fetch", accountType);
      return accountTypeId, accountType;
    } catch (error) {
      console.error("Error fetching GetClient:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
