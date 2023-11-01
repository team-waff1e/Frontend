import { createSlice } from "@reduxjs/toolkit";

const loginInputsSlice = createSlice({
  name: "loginInputsSlice",
  initialState: {
    email: "",
    pwd: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPwd: (state, action) => {
      state.pwd = action.payload;
    },
    clearLoginInputs: (state, action) => {
      state.email = "";
      state.pwd = "";
    },
  },
});

export default loginInputsSlice;
export const { setEmail, setPwd, clearLoginInputs } = loginInputsSlice.actions;
