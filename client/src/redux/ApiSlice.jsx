import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: localStorage.getItem("userData")
    ? localStorage.getItem("userData")
    : "",
};


const apiSlice = createSlice({
  name: "api",
  initialState: initialState,
  reducers: {
    addUserDetails(state, action) {
    //   state.userData = localStorage.setItem("userData", action.payload);
      console.log(action.payload,"payload")
    },
  },
});

export const { addUserDetails } = apiSlice?.actions;
export default apiSlice.reducer;
