import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
import signupValidSlice from "./signupValidSlice";
import homeClickSlice from "./homeClickSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice.reducer,
    signupValid: signupValidSlice.reducer,
    homeClick: homeClickSlice.reducer,
  },
});

export default store;
