import { createSlice } from "@reduxjs/toolkit";

const loginInputsSlice = createSlice({
  name: "loginInputsSlice",
  initialState: {
    email: "",
    name: "",
    pwd: "",
    pwdConfirm: "",
    nickname: "",
  },
  reducers: {
    storeLoginInputs: (state, action) => {
      state.email = action.email;
      state.name = action.name;
      state.pwd = action.pwd;
      state.pwdConfirm = action.pwdConfirm;
      state.nickname = action.nickname;
    },
  },
});

export default loginInputsSlice;
export const { storeLoginInputs } = loginInputsSlice.actions;
