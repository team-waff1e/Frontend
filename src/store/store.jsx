import { configureStore } from "@reduxjs/toolkit";
import signupInputsSlice from "./signupInputsSlice";

const store = configureStore({
  reducer: {
    test: signupInputsSlice.reducer,
  },
});

export default store;
