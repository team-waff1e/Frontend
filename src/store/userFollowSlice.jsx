import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  followers: [],
  following: [],
};

const userFollowSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    setFollowing: (state, action) => {
      state.following = action.payload;
    },
  },
});

export const { setUser, setFollowers, setFollowing } = userFollowSlice.actions;

export default userFollowSlice.reducer;
