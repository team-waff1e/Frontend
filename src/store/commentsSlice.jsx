import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "commentSlice",
  initialState: {
    comments: [
      {
        postId: 0,
        content: "",
        createdAt: "",
        updatedAt: "",
        likes: 0,
        memberId: 0,
      },
    ],
    selectedComment: {
      postId: 0,
      content: "",
      createdAt: "",
      updatedAt: "",
      likes: 0,
      memberId: 0,
    },
  },
  reducers: {
    fetchWaffles: (state, action) => {
      state.posts = action.payload;
    },
    addWaffle: (state, action) => {
      state.posts.push(action.payload);
    },
    selectWaffle: (state, action) => {
      state.selectedPost = action.payload;
    },
    editWaffles: (state, action) => {
      // 댓글 수정
    },
    deleteWaffles: (state, action) => {
      // 댓글 삭제
    },
  },
});

export default commentSlice;
export const {} = commentSlice.actions;
