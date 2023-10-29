import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: {
    email: "",
    name: "",
    pwd: "",
    nickname: "",
  },
  reducers: {
    storeUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.pwd = action.payload.pwd;
      state.nickname = action.payload.nickname;
    },
  },
});

export default userInfoSlice;
export const { storeUserInfo } = userInfoSlice.actions;
