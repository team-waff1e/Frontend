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
    storeInputs: (state, action) => {
      for (const s in state) {
        if (s === action.payload.name) {
          state.s = action.payload.value;
          console.log(state.s);
        }
      }
    },
    onChange: () => {},
  },
});

export default signupInputsSlice;
export const { storeInputs } = signupInputsSlice.actions;
