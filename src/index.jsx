import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Waffle from "./pages/waffles/waffles";
import Post from "./pages/waffles/posts";
import Like from "./pages/waffles/like";
import Unlike from "./pages/waffles/unlike";
import Comments from "./pages/waffles/comments";
import Comment from "./pages/waffles/comment";
import Auth from "./pages/auths/auth";
import Signup from "./pages/auths/signup";
import Login from "./pages/auths/login";
import Logout from "./pages/auths/logout";
import Nickname from "./pages/auths/nickname";
import Email from "./pages/auths/email";
import Users from "./pages/users/users";
import User from "./pages/users/user";
import Follow from "./pages/users/follow";
import Unfollow from "./pages/users/unfollow";
import CheckPwd from "./pages/users/checkPwd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // Waffle, Comment
        // Components: 게시물 등록, 게시물 리스트 조회
        path: "/waffles",
        element: <Waffle />,
        children: [
          {
            // Components: 게시물 조회(단일), 게시물 수정, 게시물 삭제
            path: "/waffles/:postId",
            element: <Post />,
            children: [
              {
                // Comment
                // Components: 댓글 등록
                path: "/waffles/:postId/comments",
                element: <Comments />,
                children: [
                  {
                    // Components: 댓글 조회, 댓글 수정, 댓글 삭제
                    path: "/waffles/:postId/comments/:commentId",
                    element: <Comment />,
                  },
                ],
              },
            ],
          },
          {
            // Components: 좋아요
            path: "/waffles/like",
            element: <Like />,
          },
          {
            // Components: 좋아요 취소
            path: "/wafflesunlike",
            element: <Unlike />,
          },
        ],
      },
      {
        // Auth
        path: "/auth",
        element: <Auth />,
        children: [
          {
            // Components: 회원 가입
            path: "/auth/signup",
            element: <Signup />,
            children: [
              {
                // Components: 닉네임 중복 체크
                path: "/auth/signup/nickname",
                element: <Nickname />,
              },
              {
                // Components: 이메일 중복 체크
                path: "/auth/signup/email",
                element: <Email />,
              },
            ],
          },
          {
            // Components: 로그인
            path: "/auth/login",
            element: <Login />,
          },
          {
            // Components: 로그아웃
            path: "/auth/logout",
            element: <Logout />,
          },
        ],
      },
      {
        // User
        // Components: 사용자 정보 조회, 사용자 정보 수정, 사용자 삭제
        path: "/users",
        element: <Users />,
        children: [
          {
            // Components: 비밀번호 확인
            path: "/users/checkpwd",
            element: <CheckPwd />,
          },
          {
            // Components: 특정 사용자 정보 조회
            path: "/users/:userId",
            element: <User />,
          },
          {
            // Components: 팔로우 신청
            path: "/users/follow",
            element: <Follow />,
          },
          {
            // Components: 팔로우 취소
            path: "/users/unfollow",
            element: <Unfollow />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
