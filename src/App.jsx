import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Waffles from "./pages/waffles";
import Waffle from "./pages/waffle";
import Members from "./pages/members";
import Follows from "./pages/follows";
import Login from "./pages/login";
import Signup from "./pages/signup";
import styled, { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";
import ProtectedRoute from "./components/protected-route";
import Layout from "./components/layout";
import Member from "./pages/member";
import WaffleMain from "./pages/waffle-main";
import EditProfile from "./pages/editprofile";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        // 로그인 이전 보일 홈페이지
        // => 로그인, 회원가입 페이지로 연결되는 링크만 넣으면 됨
        path: "/",
        element: <Home />,
        children: [
          {
            // 로그인 페이지
            path: "/login",
            element: <Login />,
          },
          {
            // 회원가입 페이지
            // => 이메일, 닉네임 중복 체크 기능
            path: "/signup",
            element: <Signup />,
          },
        ],
      },
      {
        // 로그인 인증 부분 추가 필요
        path: "/waffles",
        element: <WaffleMain />,
        children: [
          {
            // 로그인 이후 모든 게시물 출력할 페이지
            // => 새로운 게시물을 등록할 수 있는 입력창 필요
            // => 모든 게시물들이 출력 되는 컴포넌트 필요
            //   각 게시물마다 상세페이지로 이동할 링크 필요
            //   각 게시물마다 좋아요/취소 버튼 필요
            //   각 게시물마다 작성자 프로필로 이동 가능하도록 설정
            // => Navbar 컴포넌트 필요
            //   구성은 홈화면/본인프로필/로그아웃 버튼으로
            path: "",
            element: <Waffles />,
          },
          {
            // 단일 게시물 조회 시 표시할 페이지
            // => 게시물 좋아요/취소 버튼 필요
            // => 게시물 작성자라면 수정/삭제 버튼 표시
            //   게시물 수정 버튼 입력 시 조회/수정 컴포넌트가 바뀌도록 설정
            //   수정 시 기존 데이터를 읽어오도록
            // => 연관 댓글 모두 출력
            //   댓글 입력창 필요
            path: "/waffles/{waffle.id}",
            element: <Waffle />,
          },
        ],
      },
      {
        // 로그인 인증 부분 추가 완료
        path: "/members",
        element: (
          <ProtectedRoute>
            <Member />
          </ProtectedRoute>
        ),
        children: [
          {
            // 사용자 정보 조회
            // => 본인 정보 조회 시 비밀번호 확인 페이지로 이동
            //   비밀번호 확인 후 회원 상세 정보(기본 정보보다 자세한) 컴포넌트 렌더링
            //   상세정보와 함께 수정/회원탈퇴 버튼 필요
            //   수정 버튼 클릭시 회원 정보 수정 컴포넌트로 교체
            // => 본인 이외의 사용자 정보 조회 시 기본 정보 컴포넌트 랜더링
            //   팔로우/언팔로우 버튼 추가
            // => 두 컴포넌트 공통으로 팔로우/언팔로우 목록을 확인할 수 있는 버튼 필요
            path: "/members/{member.id}",
            element: <Members />,
          },
          {
            // 팔로우 정보 조회
            // => 해당 사용자의 팔로워/팔로잉 정보를 모두 출력
            //   본인 페이지라면, 언팔로우 버튼이 출력되도록 설정
            // => 표시된 사용자의 프로필로 이동할 수 있도록 링크
            path: "/members/{member.id}/editprofile",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
]);

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  body {
    min-height: 100%;
  }
  #root {
    min-height: 100%;
    margin-bottom: 100px;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Wrapper>
    </Provider>
  );
}
