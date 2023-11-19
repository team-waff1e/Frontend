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
      // 새로운 포스트를 기존의 포스트 목록에 추가
      state.posts = [...state.posts, ...action.payload];
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
      const { postId, isLiked } = action.payload;
  
      // Waffle을 좋아요 또는 좋아요 취소하는 POST 요청
      axios({
        url: POST_URL + `/${postId}/like`,
        method: isLiked ? "delete" : "post",  // 좋아요 상태에 따라 HTTP 메서드를 결정
      })
        .then((response) => {
          if (response.errorCode === 200) {
            // 선택한 게시물의 likes_count를 업데이트
            state.selectedPost.likes_count += isLiked ? -1 : 1;
  
            // 상태 내의 모든 게시물에 대한 likes_count를 업데이트
            state.posts = state.posts.map((post) =>
              post.postId === postId
                ? { ...post, likes_count: post.likes_count + (isLiked ? -1 : 1) }
                : post
            );
          }
          return response.errorCode;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // unlikeWaffle: (state, action) => {
    //   // 게시물 좋아요 취소
    // },
  },
});

export default wafflesSlice;
export const {
  fetchWaffles,
  fetchWaffle,
  addWaffle,
  editWaffle,
  deleteWaffle,
  likeWaffle,
} = wafflesSlice.actions;
