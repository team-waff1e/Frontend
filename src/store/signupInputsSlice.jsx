import { createSlice } from "@reduxjs/toolkit";

const signupInputsSlice = createSlice({
  name: "signupInputsSlice",
  initialState: {
    email: "",
    name: "",
    pwd: "",
    pwdConfirm: "",
    nickname: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPwd: (state, action) => {
      state.pwd = action.payload;
    },
    setPwdConfirm: (state, action) => {
      state.pwdConfirm = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    clearSignupInputs: (state, action) => {
      state.email = "";
      state.name = "";
      state.pwd = "";
      state.pwdConfirm = "";
      state.nickname = "";
    },
  },
});

export default signupInputsSlice;
export const {
  setEmail,
  setName,
  setPwd,
  setPwdConfirm,
  setNickname,
  clearSignupInputs,
} = signupInputsSlice.actions;
