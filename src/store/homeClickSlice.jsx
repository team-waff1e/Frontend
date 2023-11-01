import { createSlice } from "@reduxjs/toolkit";

const homeClickSlice = createSlice({
  name: "homeClickSlice",
  initialState: {
    isClicked: false,
  },
  reducers: {
    setIsClicked: (state, action) => {
      state.isClicked = action.payload;
    },
  },
});

export default homeClickSlice;
export const { setIsClicked } = homeClickSlice.actions;
