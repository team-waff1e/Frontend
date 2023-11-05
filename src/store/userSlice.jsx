import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoggedIn: false,
    memberId: NaN,
    email: "",
    name: "",
    pwd: "",
    nickname: "",
  },
  reducers: {
    storeUserInfo: (state, action) => {
      state.isLoggedIn = true;
      state.memberId = action.payload.memberId;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.pwd = action.payload.pwd;
      state.nickname = action.payload.nickname;
    },
    discardUserInfo: (state, action) => {
      state.isLoggedIn = false;
      state.memberId = NaN;
      state.email = "";
      state.name = "";
      state.pwd = "";
      state.nickname = "";
    },
  },
});

export default userSlice;
export const { storeUserInfo, discardUserInfo } = userSlice.actions;
