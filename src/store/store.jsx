import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
import signupValidSlice from "./signupValidSlice";
import homeClickSlice from "./homeClickSlice";
import signupInputsSlice from "./signupInputsSlice";
import loginInputsSlice from "./loginInputsSlice";
import userSlice from "./userSlice";
import postsSlice from "./postsSlice";
import userEditSlice from "./userEditSlice";

const store = configureStore({
  reducer: {
    homeClick: homeClickSlice.reducer,
    loginInputs: loginInputsSlice.reducer,
    posts: postsSlice.reducer,
    signupInputs: signupInputsSlice.reducer,
    signupValid: signupValidSlice.reducer,
    user: userSlice.reducer,
    userEdit : userEditSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

export default store;
