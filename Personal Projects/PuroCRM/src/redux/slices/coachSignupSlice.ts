import { createSlice } from "@reduxjs/toolkit";
//user state where we will handle the user login
const initialState = {
  openCoachSignup1: false,
  openCoachSignup2: false,
  openCoachSignup3: false,
  openCoachSignup4: false,
};
//a slice helps use create both actions and reducers
const openCoachSlice = createSlice({
  name: "coachSignup",
  initialState,
  reducers: {
    toggleOpenCoachSignup1: (state, action) => {
      state.openCoachSignup1 = action.payload;
      state.openCoachSignup2 = false;
      state.openCoachSignup3 = false;
      state.openCoachSignup4 = false;
    },
    toggleOpenCoachSignup2: (state, action) => {
      state.openCoachSignup1 = false;
      state.openCoachSignup2 = action.payload;
      state.openCoachSignup3 = false;
      state.openCoachSignup4 = false;
    },
    toggleOpenCoachSignup3: (state, action) => {
      state.openCoachSignup1 = false;
      state.openCoachSignup2 = false;
      state.openCoachSignup3 = action.payload;
      state.openCoachSignup4 = false;
    },
    toggleOpenCoachSignup4: (state, action) => {
      state.openCoachSignup1 = false;
      state.openCoachSignup2 = false;
      state.openCoachSignup3 = false;
      state.openCoachSignup4 = action.payload;
    },
  },
});
//action fn which will be used to set user statee
export const {
  toggleOpenCoachSignup1,
  toggleOpenCoachSignup2,
  toggleOpenCoachSignup3,
  toggleOpenCoachSignup4,
} = openCoachSlice.actions;

//reducer from the slice is exported
export default openCoachSlice.reducer;
