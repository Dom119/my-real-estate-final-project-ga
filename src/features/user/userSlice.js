import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  fav: [],
};

export const setUserAsync = createAsyncThunk(
  "user/setLogin",
  async ({ userName, password }) => {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    const data = await response.json();
    return data.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.userName = action.payload;
      state.fav = [];
    },
    updateFav: (state, action) => {
      state.fav = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
      state.fav = action.payload.fav;
    });
  },
});

export const { setUser, signOut, updateFav } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
