import { createSlice } from '@reduxjs/toolkit';

// 초기 상태를 빈 객체로 정의
const initialState = {};

const likeSlice = createSlice({
  name: 'like', // 슬라이스의 이름
  initialState, // 초기 상태 사용
  reducers: {
    // 게시물 좋아요
    toggleLike: (state, action) => {
      const { postId } = action.payload;

      // 만약 게시물에 대한 상태가 없다면 초기화
      if (!state[postId]) {
        state[postId] = {
          isLike: false,
          likes: 0,
          isHeartRed: false,
        };
      }
      const postLike = state[postId];

      // 'isLike' 상태를 토글하고 'likes'를 업데이트
      postLike.isLike = !postLike.isLike;
      postLike.likes += postLike.isLike ? 1 : -1;
      postLike.isHeartRed = postLike.isLike;
    },
    commentLike : (state, action) => {
      const { commentId } = action.payload;

      // 만약 댓글에 대한 상태가 없다면 초기화
      if (!state[commentId]) {
        state[commentId] = {
          isLike: false,
          likes: 0,
          isHeartRed: false,
        };
      }
      const commentLike = state[commentId];

      // 'isLike' 상태를 토글하고 'likes'를 업데이트
      commentLike.isLike = !commentLike.isLike;
      commentLike.likes += commentLike.isLike ? 1 : -1;
      commentLike.isHeartRed = commentLike.isLike;
    },
  },
});

export const { toggleLike , commentLike} = likeSlice.actions;

export default likeSlice.reducer;
