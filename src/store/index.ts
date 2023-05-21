import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/apiSlice";

export type RootState = ReturnType<typeof weatherReducer>;

const store = configureStore({
  reducer: weatherReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
