import { configureStore } from "@reduxjs/toolkit";
import signupInputsSlice from "./signupInputsSlice";

const store = configureStore({
  reducer: {
    signupInputs: signupInputsSlice.reducer,
  },
});

export default store;
