import { createSelector } from "reselect";

const selectShoppingList = (state) => state.shoppingList.shoppingList;

export const selectedProductsTotalCount = createSelector(
  selectShoppingList,
  (shoppingList) => {
    return shoppingList.reduce((total, product) => total + product.quantity, 0);
  }
);
