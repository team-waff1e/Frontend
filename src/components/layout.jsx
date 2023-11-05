import { Outlet } from "react-router-dom";

export default function Layout() {
  // 새로고침 시 토큰 기반으로 로그인 정보 다시 가져와서 저장하는 로직 작성
  return <Outlet />;
}
