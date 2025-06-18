import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const reducers = combineReducers({ cart: cartReducer, order: orderReducer });
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { persistor, store };
