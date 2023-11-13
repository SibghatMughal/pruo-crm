import { createSlice } from "@reduxjs/toolkit";
//user state where we will handle the user login
const initialState = {
  user: null,
  forgotEmail: null,
};
//a slice helps use create both actions and reducers
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },
    setForgotEmail: (state, action) => {
      state.forgotEmail = action.payload; // Set the email address
    },
  },
});
//action fn which will be used to set user statee
export const { setUser, removeUser, setForgotEmail } = userSlice.actions;

//reducer from the slice is exported
export default userSlice.reducer;
