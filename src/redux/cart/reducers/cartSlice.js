import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "shoppingList",
  initialState: {
    shoppingList: JSON.parse(localStorage.getItem("shoppingList")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProductId = state.shoppingList.find(
        (product) => product.id === productToAdd.id
      );
      if (existingProductId) {
        const updatedShoppingList = state.shoppingList.map((product) =>
          product.id === productToAdd.id
            ? {
                ...product,
                quantity: product.quantity + productToAdd.quantity,
                totalPrice:
                  (product.quantity + productToAdd.quantity) * product.price,
              }
            : product
        );

        localStorage.setItem(
          "shoppingList",
          JSON.stringify(updatedShoppingList)
        );

        return {
          ...state,
          shoppingList: updatedShoppingList,
        };
      } else {
        const updatedShoppingList = [
          ...state.shoppingList,
          {
            ...productToAdd,
            totalPrice: productToAdd.quantity * productToAdd.price,
          },
        ];

        localStorage.setItem(
          "shoppingList",
          JSON.stringify(updatedShoppingList)
        );

        return {
          ...state,
          shoppingList: updatedShoppingList,
        };
      }
    },
    removeFromCart: (state, action) => {
      state.shoppingList = state.shoppingList.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
    },
    setShoppingList: (state, action) => {
      state.shoppingList = action.payload;
      localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
    },

    updateProductQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const updatedShoppingList = state.shoppingList.map((product) => {
        if (product.id === productId) {
          const totalPrice = quantity * product.price;
          return { ...product, quantity, totalPrice };
        }
        return product;
      });

      localStorage.setItem("shoppingList", JSON.stringify(updatedShoppingList));
      return {
        ...state,
        shoppingList: updatedShoppingList,
      };
    },

    updateTotalProductsCount: (state) => {
      const totalProductsCount = state.shoppingList.reduce(
        (total, product) => total + product.quantity,
        0
      );
      return {
        ...state,
        totalProductsCount,
      };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setShoppingList,
  updateProductQuantity,
  updateTotalProductsCount,
} = cartSlice.actions;

export const selectTotalProductsCount = (state) =>
  state.shoppingList.totalProductsCount;

export default cartSlice.reducer;
