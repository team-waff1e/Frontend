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
      console.log(action);
    },
    setName: (state, action) => {
      state.name = action.payload;
      console.log(action);
    },
    setPwd: (state, action) => {
      state.pwd = action.payload;
      console.log(action);
    },
    setPwdConfirm: (state, action) => {
      state.pwdConfirm = action.payload;
      console.log(action);
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
      console.log(action);
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
