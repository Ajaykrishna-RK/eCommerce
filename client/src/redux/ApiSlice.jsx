import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const apiSlice = createSlice({
  name: "api",
  initialState: initialState,
  reducers: {
    Login(state, action) {
      state.token = localStorage.setItem(
        "token",
        JSON.stringify(action.payload.token)
      );
    },
    LogOut(state) {
      localStorage.removeItem("token");

      state.token = null;
    },
  },
});

export const { Login, LogOut } = apiSlice?.actions;
export default apiSlice.reducer;
