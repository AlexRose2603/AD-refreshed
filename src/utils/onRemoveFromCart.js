import { removeFromCart } from "../redux/cart/reducers/cartSlice";

export const onRemoveFromCart = (dispatch, productId) => {
  dispatch(removeFromCart(productId));
};
