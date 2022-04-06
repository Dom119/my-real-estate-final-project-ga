import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchModal: false,
  loginWarningModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSearchModal: (state, action) => {
      state.searchModal = action.payload === "true" ? true : false 
    },
   
    openLoginWarningModal: (state) => {
      state.loginWarningModal = true;
    },
    closeLoginWarmingModal: (state) => {
      state.loginWarningModal = false;
    },
  },
});

export const {
    toggleSearchModal,
  openLoginWarningModal,
  closeLoginWarmingModal,
} = modalSlice.actions;

export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
