import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { POST_URL } from "../apis/urls";

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState: {
    comments: [
      {
        commentId: 0,
        content: "",
        createdAt: "",
        updatedAt: "",
        waffleId: 0,
        memberId: 0,
      },
    ],
    selectedComment: {
      commentId: 0,
      content: "",
      createdAt: "",
      updatedAt: "",
      waffleId: 0,
      memberId: 0,
    },
  },
  reducers: {
    fetchReplys: (state, action) => {
      axios({
        url: POST_URL + `/${action.payload.waffleId}/comments`,
        method: "get",
      }).then((response) => {
        if (response.errorCode === 200) {
          state.comments = response.CommentResponseDTO;
        }
        return response.errorCode;
      });
    },
    addReply: (state, action) => {
      state.comments.push(action.payload);
    },
    selectReply: (state, action) => {
      state.selectedComment = action.payload;
    },
    editReply: (state, action) => {
      // 댓글 수정
    },
    deleteReply: (state, action) => {
      // 댓글 삭제
    },
  },
});

export default commentsSlice;
export const { fetchReplys, addReply, selectReply } = commentsSlice.actions;
