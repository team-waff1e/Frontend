import { createSlice } from "@reduxjs/toolkit";

const signupErrorSlice = createSlice({
  name: "signupErrorSlice",
  initialState: {
    errMessage: "",
  },
  reducers: {
    setErrMessage: (state, action) => {
      state.errMessage = action.payload;
    },
  },
});

export default signupErrorSlice;
export const { setErrMessage } = signupErrorSlice.actions;
