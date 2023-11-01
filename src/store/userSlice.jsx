import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {
      username: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = {
        username: "",
      };
    },
  },
});

export default userSlice;
export const { setUser, logoutUser } = userSlice.actions;
