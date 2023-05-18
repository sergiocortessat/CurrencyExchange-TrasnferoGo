import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers";

const store = configureStore({
  reducer: appReducer,
});

export default store;
