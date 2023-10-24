import { configureStore } from "@reduxjs/toolkit";
import signupErrorSlice from "./signupErrorSlice";

const store = configureStore({
  reducer: {
    signupError: signupErrorSlice.reducer,
  },
});

export default store;
