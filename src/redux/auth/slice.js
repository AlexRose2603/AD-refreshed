import { createAction, createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut } from "./operations";

export const saveTokenToState = createAction("auth/saveTokenToState");

export const saveTokenToLocalStorage = createAction(
  "auth/saveTokenToLocalStorage"
);

export const clearTokenFromState = createAction("auth/clearTokenFromState");

export const clearTokenFromLocalStorage = createAction(
  "auth/clearTokenFromLocalStorage"
);
const initialState = {
  user: {
    userId: localStorage.getItem("userId") || null,
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      const { accessToken } = action.payload;
      state.token = { accessToken };
      state.isLoggedIn = true;
      localStorage.setItem("accessToken", action.payload.accessToken);
    },

    saveUserId: (state, action) => {
      const { userId } = action.payload;
      state.user = { userId };
      localStorage.setItem("userId", userId);
      console.log("userId from saveUserId:", action.payload.userId);
    },

    clearToken: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => state)
      .addCase(register.fulfilled, (state, action) => {
        const { userId, accessToken } = action.payload;
        state.user = { userId };
        state.token = { accessToken };
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(logIn.pending, (state) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        const { userId, accessToken } = action.payload;
        state.user = { userId };
        state.token = { accessToken };
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(logOut.pending, (state) => state)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state) => state);
  },
});
export const { saveToken, saveUserId, clearToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
