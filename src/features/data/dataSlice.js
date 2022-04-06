import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log('payload', action.payload);
      state.data = [...action.payload]
    },
  },
});

export const { setData } = dataSlice.actions;

export const selectData = (state) => state.data.data;

export default dataSlice.reducer;
