import { createSlice } from "@reduxjs/toolkit";

const wafflesSlice = createSlice({
  name: "wafflesSlice",
  initialState: {
    posts: [
      {
        postId: 0,
        content: "",
        createdAt: "",
        updatedAt: "",
        likes: 0,
        memberId: 0,
      },
    ],
  },
  reducers: {
    fetchWaffles: (state, action) => {
      state.posts = action.payload;
    },
    addWaffles: (state, action) => {
      state.posts.push(action.payload);
    },
    editWaffles: (state, action) => {
      // 게시물 수정 로직 추가 (백엔드 연동이 필요함)
    },
    deleteWaffles: (state, action) => {
      // 게시물 삭제 로직 추가 (백엔드 연동이 필요함)
    },
    likeWaffles: (state, action) => {
      // 게시물 좋아요 처리 (백엔드 연동이 필요함)
    },
    unlikeWaffles: (state, action) => {
      // 게시물 좋아요 취소 처리 (백엔드 연동이 필요함)
    },
  },
});

export default wafflesSlice;
export const {
  fetchWaffles,
  addWaffles,
  editWaffles,
  deleteWaffles,
  likeWaffles,
  unlikeWaffles,
} = wafflesSlice.actions;
