import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token");

const initialState = {
  token: storedToken || null,
};

const apiSlice = createSlice({
  name: "api",
  initialState: initialState,
  reducers: {
    Login(state, action) {
      const token = action?.payload?.token;
      if (token) {
        // Update state immutably by returning a new state object
        return {
          ...state,
          token: token,
        };
      }
      return state; // Return current state if no token provided
    },
    LogOut(state) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };
    },
  },
});

export const { Login, LogOut } = apiSlice.actions;
export default apiSlice.reducer;
