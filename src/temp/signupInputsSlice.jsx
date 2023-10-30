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
    storeSignupInputs: (state, action) => {
      state.email = action.email;
      state.name = action.name;
      state.pwd = action.pwd;
      state.pwdConfirm = action.pwdConfirm;
      state.nickname = action.nickname;
    },
  },
});

export default signupInputsSlice;
export const { storeSignupInputs } = signupInputsSlice.actions;
