import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_FAVOURITES,
} from "./actionTypes";

export const addToFavouritesAction = (productId) => {
  console.log("productId", productId);
  return {
    type: ADD_TO_FAVOURITES,
    payload: productId,
  };
};

export const removeFromFavouritesAction = (productId) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: productId,
  };
};

export const setFavouritesAction = (favourites) => {
  return {
    type: SET_FAVOURITES,
    payload: favourites,
  };
};
