import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { saveToken, saveUserId } from "./slice";

axios.defaults.baseURL = "http://test.svdevsoft.com/admin-area";
// axios.defaults.baseURL = "https://addriverclub.com/admin-area";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const handleLoginSuccess = (userId, accessToken, dispatch) => {
  console.log(
    "Setting userId and accessToken in local storage:",
    userId,
    accessToken
  );
  if (userId && accessToken) {
    dispatch(saveToken({ userId, accessToken }));
    dispatch(saveUserId(userId));
    localStorage.setItem("userId", userId);
    localStorage.setItem("accessToken", accessToken);
  } else {
    console.error(
      "Invalid userId or accessToken provided to handleLoginSuccess"
    );
  }
};

export const clearToken = createAction("auth/clearToken");
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const register = createAsyncThunk(
  "/api/Auth/Register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/api/Auth/Register", credentials);
      console.log("Registration response:", response.data);
      // const { userId, accessToken } = response.data;
      const responseData = response.data;
      console.log("Complete responseData:", responseData);
      if (
        responseData &&
        responseData.data.userId &&
        responseData.data.accessToken
      ) {
        const { userId, accessToken } = responseData.data;
        // thunkAPI.dispatch(saveToken({ userId, accessToken }));
        handleLoginSuccess(userId, accessToken, thunkAPI.dispatch);
        console.log("Registration userId", userId);
        console.log("Registration accessToken", accessToken);
      } else {
        console.error(
          "Invalid registration response format or missing userId/accessToken"
        );
      }

      // return { userId, accessToken };
      return responseData.data;
      // return responseData;
    } catch (error) {
      // return (
      //   response?.data ??
      //   thunkAPI.rejectWithValue(error.response?.data || error.message)
      // );

      return thunkAPI.rejectWithValue(error.response?.data || error.message);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "/api/Auth/Login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/api/Auth/Login", credentials);
      const { userId, accessToken } = response.data;

      if (accessToken) {
        handleLoginSuccess(userId, accessToken, thunkAPI.dispatch);
        setAuthHeader(accessToken);
      }

      console.log("LogIn userId", userId);
      console.log("LogIn accessToken", accessToken);

      return { userId, accessToken };
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(clearToken());
    return "Logged out successfully";
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
