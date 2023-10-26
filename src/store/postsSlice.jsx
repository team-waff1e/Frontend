import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [], // 게시물 목록을 저장하는 배열
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      // 게시물 수정 로직 추가 (백엔드 연동이 필요함)
    },
    deletePost: (state, action) => {
      // 게시물 삭제 로직 추가 (백엔드 연동이 필요함)
    },
    likePost: (state, action) => {
      // 게시물 좋아요 처리 (백엔드 연동이 필요함)
    },
    unlikePost: (state, action) => {
      // 게시물 좋아요 취소 처리 (백엔드 연동이 필요함)
    },
  },
});

export const { addPost, editPost, deletePost, likePost, unlikePost } = postsSlice.actions;

export default postsSlice.reducer;
