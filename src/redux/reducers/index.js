import { combineReducers } from "redux";
import favouriteReducer from "./favouriteReducer";
import cartReducer from "../cart/reducers/cartSlice";

export default combineReducers({
  favouriteReducer,
  cartReducer,
});
