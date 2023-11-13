import { createSlice } from "@reduxjs/toolkit";
//user state where we will handle the user login
const initialState = {
  openScreen1: true,
  openScreen2: false,
  openScreen3: false,
  openScreen4: false,
  openScreen5: false,
  openScreen6: false,
  openScreen7: false,
};
//a slice helps use create both actions and reducers
const twoFaSSlice = createSlice({
  name: "twoFa",
  initialState,
  reducers: {
    toggleScreen1: (state, action) => {
      state.openScreen1 = action.payload;
      state.openScreen2 = false;
      state.openScreen3 = false;
      state.openScreen4 = false;
      state.openScreen5 = false;
      state.openScreen6 = false;
      state.openScreen7 = false;
    },
    toggleScreen2: (state, action) => {
      state.openScreen1 = false;
      state.openScreen2 = action.payload;
      state.openScreen3 = false;
      state.openScreen4 = false;
      state.openScreen5 = false;
      state.openScreen6 = false;
      state.openScreen7 = false;
    },
    toggleScreen3: (state, action) => {
      state.openScreen1 = false;
      state.openScreen2 = false;
      state.openScreen3 = action.payload;
      state.openScreen4 = false;
      state.openScreen5 = false;
      state.openScreen6 = false;
      state.openScreen7 = false;
    },
    toggleScreen4: (state, action) => {
      state.openScreen1 = false;
      state.openScreen2 = false;
      state.openScreen3 = false;
      state.openScreen4 = action.payload;
      state.openScreen5 = false;
      state.openScreen6 = false;
      state.openScreen7 = false;
    },
    toggleScreen5: (state, action) => {
      state.openScreen1 = false;
      state.openScreen2 = false;
      state.openScreen3 = false;
      state.openScreen4 = false;
      state.openScreen5 = action.payload;
      state.openScreen6 = false;
      state.openScreen7 = false;
    },
    toggleScreen6: (state, action) => {
      state.openScreen1 = false;
      state.openScreen2 = false;
      state.openScreen3 = false;
      state.openScreen4 = false;
      state.openScreen5 = false;
      state.openScreen6 = action.payload;
      state.openScreen7 = false;
    },
  },
});
//action fn which will be used to set user statee
export const {
  toggleScreen1,
  toggleScreen2,
  toggleScreen3,
  toggleScreen4,
  toggleScreen5,
  toggleScreen6,
} = twoFaSSlice.actions;

//reducer from the slice is exported
export default twoFaSSlice.reducer;
