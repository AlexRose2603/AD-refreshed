import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: JSON.parse(localStorage.getItem("favourites")) || [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.favourites.push(action.payload);
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    setFavourites: (state, action) => {
      state.favourites = action.payload;
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { addToFavourites, removeFromFavourites, setFavourites } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;
