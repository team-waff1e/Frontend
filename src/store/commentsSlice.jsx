import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { POST_URL } from "../apis/urls";

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState: {
    comments: [
      {
        commentId: 0,
        content: "",
        createdAt: "",
        updatedAt: "",
        waffleId: 0,
        memberId: 0,
      },
    ],
    selectedComment: {
      commentId: 0,
      content: "",
      createdAt: "",
      updatedAt: "",
      waffleId: 0,
      memberId: 0,
    },
  },
  reducers: {
    fetchReplys: (state, action) => {
      axios({
        url: POST_URL + `/${action.payload.waffleId}/comments`,
        method: "get",
      }).then((response) => {
        if (response.errorCode === 200) {
          state.comments = response.CommentResponseDTO;
        }
        return response.errorCode;
      });
    },
    addReply: (state, action) => {
      state.comments.push(action.payload);
    },
    selectReply: (state, action) => {
      state.selectedComment = action.payload;
    },
    editReply: (state, action) => {
      if (state.selectedComment) {
        axios({
          url: POST_URL + `/${state.selectedComment.waffleId}/comments/${state.selectedComment.commentId}`,
          method: "put",
          data: {
            content: action.payload.content,
            updatedAt: action.payload.updatedAt,
          },
        })
          .then((response) => {
            if (response.status === 303) {
              window.location.href = response.headers.location;
            } else {
              console.log("Edit comment success");
            }
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.status === 401) {
                console.error("Unauthorized: Invalid Waffle ID");
              } else if (error.response.status === 402) {
                console.error("Payment Required: Invalid Comment ID");
              } else if (error.response.status === 403) {
                console.error("Forbidden: Blank Content");
              }
            } else {
              console.error("Error editing comment:", error);
            }
          });
      }
    },
    deleteReply: (state, action) => {
      axios({
        url: POST_URL + `/${action.payload.waffleId}/comments/${action.payload.commentId}`,
        method: "delete",
      })
        .then((response) => {
          if (response.status === 204) {
            // Success: No Content
            console.log("Delete comment success");
          } else {
            // Handle other success cases if needed
            console.log("Delete comment success");
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
              console.error("Unauthorized: Invalid Waffle ID");
            } else if (error.response.status === 402) {
              console.error("Payment Required: Invalid Comment ID");
            } else if (error.response.status === 403) {
              console.error("Forbidden: Blank Content");
            }
          } else {
            console.error("Error deleting comment:", error);
          }
        });
    },
  },
});

export default commentsSlice;
export const { fetchReplys, addReply, selectReply, editReply, deleteReply } = commentsSlice.actions;
