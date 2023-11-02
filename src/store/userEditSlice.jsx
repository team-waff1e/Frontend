import { createSlice } from "@reduxjs/toolkit";

const userEditSlice = createSlice({
    name : "userEditSlice",
    initialState : {
        editEmail : "",
        editName : "",
        editPwd : "",
        editPwdConfirm : "",
        editNickname : "",
    },
    reducers:{
        setEmail: (state, action) => {
            state.editEmail = action.payload;
        },
        setName: (state, action) => {
            state.editName = action.payload;
        },
        setPwd: (state, action) => {
            state.editPwd = action.payload;
        },
        setPwdConfirm: (state, action) => {
            state.editPwdConfirm = action.payload;
        },
        setNickname: (state, action) => {
            state.editNickname = action.payload;
        },
        clearEdits: (state, action) => {
            state.editName = "";
            state.editPwd = "";
            state.editNickname = "";
        }
    }
});


export default userEditSlice;
export const { setEmail, setName, setNickname, setPwd, setPwdConfirm, clearEdits } = userEditSlice.actions;