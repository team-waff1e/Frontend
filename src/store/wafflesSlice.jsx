import { createSlice } from "@reduxjs/toolkit";

const wafflesSlice = createSlice({
  name: "wafflesSlice",
  initialState: {
    posts: [
      {
        postId: 0,
        content: "",
        likes_count: 0,
        comment_count: 0,
        createdAt: "",
        updatedAt: "",
        memberId: 0,
      },
    ],
    selectedPost: {
      postId: 0,
      content: "",
      likes_count: 0,
      comment_count: 0,
      createdAt: "",
      updatedAt: "",
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
    editWaffle: (state, action) => {
      state.selectedPost.content = action.payload.content;
      for (const post of state.posts) {
        if (post.postId === action.payload.waffleId) {
          post.content = action.payload.content;
        }
      }
    },
    deleteWaffle: (state, action) => {
      for (const post of state.posts) {
        if (post.postId === action.payload) {
          state.posts.pop();
        }
      }
    },
    likeWaffle: (state, action) => {
      // 게시물 좋아요
    },
    unlikeWaffle: (state, action) => {
      // 게시물 좋아요 취소
    },
  },
});

export default wafflesSlice;
export const {
  fetchWaffles,
  addWaffle,
  selectWaffle,
  editWaffle,
  deleteWaffle,
} = wafflesSlice.actions;
