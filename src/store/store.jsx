import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
import signupValidSlice from "./signupValidSlice";
import homeClickSlice from "./homeClickSlice";
import signupInputsSlice from "./signupInputsSlice";
import loginInputsSlice from "./loginInputsSlice";

const store = configureStore({
  reducer: {
    homeClick: homeClickSlice.reducer,
    loginInputs: loginInputsSlice.reducer,
    signupInputs: signupInputsSlice.reducer,
    signupValid: signupValidSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

export default store;
