import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import postsSlice from './postsSlice';
import commentsSlice from './commentsSlice';
import likeSlice from './likeSlice';





const store = configureStore({
  reducer: {
    like: likeSlice,
    comments: commentsSlice,
    posts: postsSlice,
  },
});

export default store;
