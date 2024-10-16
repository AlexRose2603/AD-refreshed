import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "../shop/operations/productsSlice";
import productCardReducer from "../productCard/ProductCardSlice";
import favouriteReducer from "../reducers/favouritesSlice";
import cartReducer from "../cart/reducers/cartSlice";
import citiesReducer from "../novaPost/novaPostSlice";
import postOfficesReducer from "../novaPost/offices/officesSlice";
import tariffReducer from "../tarifs/tarifSlice";
import urlReducer from "../tarifs/getUrl/urlSlice";
import clientReducer from "../getClient/getClientSlice";
import { authReducer } from "../auth/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    products: productsReducer,
    productCard: productCardReducer,
    favourites: favouriteReducer,
    shoppingList: cartReducer,
    novaPostCities: citiesReducer,
    novaPostOffices: postOfficesReducer,
    subscription: tariffReducer,
    paymentUrl: urlReducer,
    clientTariffId: clientReducer,
  },
  // middleware: [thunk],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
