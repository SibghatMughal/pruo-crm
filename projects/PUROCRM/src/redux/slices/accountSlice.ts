import { createSlice } from "@reduxjs/toolkit";
//user state where we will handle the user login
const initialState = {
  openCreateAccount: false,
  openForgetPassword: false,
};
//a slice helps use create both actions and reducers
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    toggleOpenCreateAccount: (state, action) => {
      state.openCreateAccount = action.payload;
      state.openForgetPassword = false;
    },

    toggleOpenForgetPassword: (state, action) => {
      state.openCreateAccount = false;
      state.openForgetPassword = action.payload;
    },
  },
});
//action fn which will be used to set user statee
export const { toggleOpenCreateAccount, toggleOpenForgetPassword } =
  accountSlice.actions;

//reducer from the slice is exported
export default accountSlice.reducer;
