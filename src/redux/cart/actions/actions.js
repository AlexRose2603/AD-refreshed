import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_SHOPPING_LIST,
  UPDATE_PRODUCT_QUANTITY,
  UPDATE_CART_COUNT,
} from "./actionTypes";

export const addToCartAction = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCartAction = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const setShoppingListAction = (shoppingList) => {
  return {
    type: SET_SHOPPING_LIST,
    payload: shoppingList,
  };
};
export const updateProductQuantity = (productId, newQuantity) => {
  return {
    type: UPDATE_PRODUCT_QUANTITY,
    payload: {
      productId,
      newQuantity,
    },
  };
};

export const updateCartCount = (count) => {
  return {
    type: UPDATE_CART_COUNT,
    payload: count,
  };
};
