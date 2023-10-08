import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlices"

const store = configureStore({
  reducer:productReducer,
  devTools: true

});

export default store;