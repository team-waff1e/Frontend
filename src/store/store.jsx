import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [
      {
        id: 1,
        content: 'This is an example post 1',
      },
      {
        id: 2,
        content: 'This is an example post 2',
      },
      {
        id: 3,
        content: 'This is an example post 3',
      },
    ], 
    selectedPost: null, 
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const { postId, updatedContent } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.content = updatedContent;
      }
    },
    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
}});

export const { addPost, editPost, selectPost } = postsSlice.actions;


const commentsSlice = createSlice({
  name: 'comments',
  initialState: [
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
  ],
  reducers: {
    addComment: (state, action) => {
      state.push(action.payload);
    },
    editComment: (state, action) => {
      const commentIndex = state.findIndex(comment => comment.id === action.payload.id);

      if (commentIndex != -1) {
        state[commentIndex] = action.payload;
      }
    }
  },
});

export const { addComment, editComment } = commentsSlice.actions;


const likeSlice = createSlice({
  name: 'like',
  initialState: {},
  reducers: {
    toggleLike: (state, action) => {
      const { postId } = action.payload;
      if (!state[postId]) {
        state[postId] = {
          isLike: false,
          likes: 0,
          isHeartRed: false,
        };
      }
      const postLike = state[postId];
      postLike.isLike = !postLike.isLike;
      postLike.likes += postLike.isLike ? 1 : -1;
      postLike.isHeartRed = postLike.isLike;
    },
  },
});

export const { toggleLike } = likeSlice.actions;


const store = configureStore({
  reducer: {
    like: likeSlice.reducer,
    comments: commentsSlice.reducer,
    posts: postsSlice.reducer,
  },
});

export default store;
