import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../search/searchSlice";
import modalReducer from "../modal/modalSlice";
import dataReducer from "../data/dataSlice";
import userReducer from "../user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    data: dataReducer,
    modal: modalReducer,
  },
});
