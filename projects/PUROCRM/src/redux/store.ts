import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import accountReducer from "./slices/accountSlice";
import clientRegistrationReducer from "./slices/clientRegistrationSlice";
import coachSignupReducer from "./slices/coachSignupSlice";
import twoFAReducer from "./slices/twoFASlice";

//redux  store where all states are connected together
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    accountInfo: accountReducer,
    clientRegistrationInfo: clientRegistrationReducer,
    coachSignupInfo: coachSignupReducer,
    twoFAInfo: twoFAReducer,
  },
});

export default store;
