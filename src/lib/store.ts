import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/features/productSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
