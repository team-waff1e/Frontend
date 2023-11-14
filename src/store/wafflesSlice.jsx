import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { POST_URL } from "../apis/urls";

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
    fetchWaffle: (state, action) => {
      axios({
        url: POST_URL + `/${action.payload.waffleId}`,
        method: "get",
      }).then((response) => {
        if (response.errorCode === 200) {
          state.selectedPost = response.WaffleResponseDTO;
        }
        return response.errorCode;
      });
    },
    addWaffle: (state, action) => {
      axios({
        url: POST_URL,
        method: "post",
        data: action.payload,
      })
        .then((response) => {
          if (response.errorCode === 201) {
            state.posts.push(action.payload);
          }
          return response.errorCode;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editWaffle: (state, action) => {
      const content = action.payload.content;
      axios({
        url: POST_URL + `/${action.payload.waffleId}`,
        method: "patch",
        data: { content },
      })
        .then((response) => {
          if (response.errorCode === 200) {
            state.selectedPost.content = action.payload.content;
            for (const post of state.posts) {
              if (post.postId === action.payload.waffleId) {
                post.content = action.payload.content;
              }
            }
          }
          return response.errorCode;
        })
        .catch((error) => {
          console.log(error);
        });
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
  fetchWaffle,
  addWaffle,
  editWaffle,
  deleteWaffle,
} = wafflesSlice.actions;
