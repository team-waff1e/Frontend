import { createSlice } from "@reduxjs/toolkit";

const signupValidSlice = createSlice({
  name: "signupValidSlice",
  initialState: {
    // VM: validation message
    emailVM: "",
    isEmailV: false,
    // nnm: nickname
    nnmVM: "",
    isNnmV: false,
  },
  reducers: {
    setEmailVM: (state, action) => {
      state.emailVM = action.payload;
    },
    setIsEmailV: (state, action) => {
      state.isEmailV = action.payload;
    },
    setNnmVM: (state, action) => {
      state.nnmVM = action.payload;
    },
    setIsNnmV: (state, action) => {
      state.isNnmV = action.payload;
    },
  },
});

export default signupValidSlice;
export const { setEmailVM, setIsEmailV, setNnmVM, setIsNnmV } =
  signupValidSlice.actions;
