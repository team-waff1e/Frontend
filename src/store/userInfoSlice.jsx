import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: {
    isLoggedIn: false,
    email: "",
    name: "",
    pwd: "",
    nickname: "",
  },
  reducers: {
    storeUserInfo: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.pwd = action.payload.pwd;
      state.nickname = action.payload.nickname;
    },
    discardUserInfo: (state, action) => {
      state.isLoggedIn = false;
      state.email = "";
      state.name = "";
      state.pwd = "";
      state.nickname = "";
    },
  },
});

export default userInfoSlice;
export const { storeUserInfo, discardUserInfo } = userInfoSlice.actions;
