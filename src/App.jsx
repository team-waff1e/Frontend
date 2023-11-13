import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Waffles from "./pages/waffles";
import Waffle from "./pages/waffle";
import Follows from "./pages/follows";
import Login from "./pages/login";
import Signup from "./pages/signup";
import store from "./store/store";
import Member from "./pages/member";
import WaffleMain from "./pages/waffle-main";
import MemberMain from "./pages/member-main";
import WaffleEdit from "./pages/waffle-edit";
import Layout from "./components/layout";
import ProtectedRoute from "./components/protections/protected-route";
import ProtectedRoutePrincipal from "./components/protections/protected-route-principal";
import WaffleList from "./components/waffles/waffle-list";
import SettingMain from "./pages/setting-main";
import SettingNav from "./components/navs/setting-nav";
import MemberEdit from "./components/settings/member-edit-basic-info";

const router = createBrowserRouter([
  {
    // 새로고침시 로그인 정보를 받아와서 userSlice에 저장하는 로직 Layout에 작성
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/waffles",
        element: <WaffleMain />,
        children: [
          {
            path: "",
            element: <Waffles />,
          },
          {
            path: "/waffles/:waffleId",
            element: <Waffle />,
          },
          {
            path: "/waffles/:waffleId/edit",
            element: <WaffleEdit />,
          },
        ],
      },
      {
        path: "/members",
        element: (
          <ProtectedRoute>
            <MemberMain />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/members/:memberId",
            element: <Member />,
            children: [
              {
                path: "",
                element: <WaffleList />,
              },
              // 본인이 게시한 댓글, 좋아요 누른 게시글 목록 볼 수 있는 Link 생성
            ],
          },
          {
            path: "/members/:memberId/follows",
            element: <Follows />,
          },
          {
            path: "/members/:memberId/settings",
            element: <SettingMain />,
            children: [
              {
                path: "",
                element: <SettingNav />,
              },
              {
                // 비밀번호 확인 로직 방법1. 프로텍션 라우트 씌우기(비밀번호 일치한 경우 children으로 컴포넌트 교체)
                path: "/members/:memberId/settings/basicInfo",
                element: (
                  <ProtectedRoutePrincipal>
                    <MemberEdit
                      title="Change Your Information"
                      profileImg={true}
                      tags={["name", "nickname"]}
                    />
                  </ProtectedRoutePrincipal>
                ),
              },
              {
                path: "/members/:memberId/settings/profileImg",
                element: (
                  <ProtectedRoutePrincipal>
                    <MemberEdit
                      title="Change Your Password"
                      profileImg={false}
                      tags={[
                        "current password",
                        "password",
                        "password confirm",
                      ]}
                    />
                    ,
                  </ProtectedRoutePrincipal>
                ),
              },
            ],
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
  html, body, #root {
    min-height: 100vh;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f0cb8c;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(255, 240, 199, 0.7);
  }
`;

const Wrapper = styled.div`
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
