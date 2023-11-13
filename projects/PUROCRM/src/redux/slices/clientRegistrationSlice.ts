import { createSlice } from "@reduxjs/toolkit";
//user state where we will handle the user login
const initialState = {
  openClientRegistration1: false,
  openClientRegistration2: false,
  openClientRegistration3: false,
  openClientRegistration4: false,
};
//a slice helps use create both actions and reducers
const clientRegistrationSlice = createSlice({
  name: "clientRegistration",
  initialState,
  reducers: {
    toggleOpenClientRegistration1: (state, action) => {
      state.openClientRegistration1 = action.payload;
      state.openClientRegistration2 = false;
      state.openClientRegistration3 = false;
      state.openClientRegistration4 = false;
    },
    toggleOpenClientRegistration2: (state, action) => {
      state.openClientRegistration1 = false;
      state.openClientRegistration2 = action.payload;
      state.openClientRegistration3 = false;
      state.openClientRegistration4 = false;
    },
    toggleOpenClientRegistration3: (state, action) => {
      state.openClientRegistration1 = false;
      state.openClientRegistration2 = false;
      state.openClientRegistration3 = action.payload;
      state.openClientRegistration4 = false;
    },
    toggleOpenClientRegistration4: (state, action) => {
      state.openClientRegistration1 = false;
      state.openClientRegistration2 = false;
      state.openClientRegistration3 = false;
      state.openClientRegistration4 = action.payload;
    },
  },
});
//action fn which will be used to set user statee
export const {
  toggleOpenClientRegistration1,
  toggleOpenClientRegistration2,
  toggleOpenClientRegistration3,
  toggleOpenClientRegistration4,
} = clientRegistrationSlice.actions;

//reducer from the slice is exported
export default clientRegistrationSlice.reducer;
