import { createSlice } from "@reduxjs/toolkit";

const userEditSlice = createSlice({
    name : "userEditSlice",
    initialState : {
        email : "",
        name : "",
        pwd : "",
        pwdConfirm : "",
        nickname : "",
    },
    reducers:{
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPwd: (state, action) => {
            state.pwd = action.payload;
        },
        setPwdConfirm: (state, action) => {
            state.pwdConfirm = action.payload;
        },
        setNickname: (state, action) => {
            state.nickname = action.payload;
        },
        clearEdits: (state, action) => {
            state.name = "";
            state.pwd = "";
            state.nickname = "";
        }
    }
});


export default userEditSlice;
export const { setEmail, setName, setNickname, setPwd, setPwdConfirm, clearEdits } = userEditSlice.actions;