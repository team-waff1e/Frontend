import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
import signupValidSlice from "./signupValidSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice.reducer,
    signupValid: signupValidSlice.reducer,
  },
});

export default store;
