import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MEMBER_URL } from "../apis/urls";

const userFollowSlice = createSlice({
  name: "userFollow",
  initialState: {
    user: null,
    followers: [],
    following: [],
  },
  reducers: {
    fetchUserFollow: (state, action) => {
      axios({
        url: MEMBER_URL + `/${action.payload.memberId}/follow`,
        method: "get",
      })
        .then((response) => {
          if (response.errorCode === 200) {
            state.user = response.data.memberId;
            state.followers = response.data.followers;
            state.following = response.data.following;
          }
          return response.errorCode;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    follow: (state, action) => {
      axios({
        url: MEMBER_URL + "/follow",
        method: "post",
        data: {
          userId: action.payload.userId,
          memberId: action.payload.memberId,
        },
      })
        .then((response) => {
          if (response.errorCode === 200) {
            // 나중에 response 보고 수정
          }
          return response.errorCode;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    unfollow: (state, action) => {
      axios({
        url: MEMBER_URL + "/unfollow",
        method: "post",
        data: {
          userId: action.payload.userId,
          memberId: action.payload.memberId,
        },
      })
        .then((response) => {
          if (response.errorCode === 200) {
            // 나중에 response 보고 수정
          }
          return response.errorCode;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export const { fetchUserFollow } = userFollowSlice.actions;

export default userFollowSlice.reducer;
