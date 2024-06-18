import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authSlice from "./authSlice";

const reducer = combineReducers({
  auth: authSlice,
});

const store = configureStore({
  reducer,
});

export default store;
