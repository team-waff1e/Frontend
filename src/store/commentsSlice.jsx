import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = [
    {
        id: 1,
        waffleId: 1,
        content: "This is the first comment",
        createdAt: "2023-10-20T10:50:30",
        updatedAt: "2023-10-20T10:52:45",
        member: {
          nickname: "User1",
          profile_url: "user1_profile.jpg",
        },
      },
      {
        id: 2,
        waffleId: 1,
        content: "Another comment here",
        createdAt: "2023-10-20T11:20:15",
        updatedAt: "2023-10-20T11:22:30",
        member: {
          nickname: "User2",
          profile_url: "user2_profile.jpg",
        },
      },
];

const commentsSlice = createSlice({
  name: 'comments', // 슬라이스의 이름
  initialState, // 초기 상태를 사용
  reducers: {
    // 댓글 추가
    addComment: (state, action) => {
        state.push(action.payload);
      },
    // 댓글 수정
    editComment: (state, action) => {
        const commentIndex = state.findIndex(comment => comment.id === action.payload.id);

        if (commentIndex !== -1) {
          state[commentIndex] = action.payload;
        }
      },
      // commentLike: (state, action) => {
      //   const commentIndex = state.findIndex(comment => comment.id === action.payload.id);

      //   if (commentIndex !== -1) {
      //     state[commentIndex].likes += 1;
      //   }
      // },
      deleteComment: (state, action) => {
        const commentIndex = state.findIndex(comment => comment.id === action.payload.id);

        if (commentIndex !== -1) {
          state.splice(commentIndex, 1);
        }
      },

  },
});

export const { addComment, editComment, deleteComment } = commentsSlice.actions;

export default commentsSlice.reducer;
