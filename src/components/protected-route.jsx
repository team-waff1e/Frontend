import { useSelector } from "react-redux";
import Modal from "./modal";

export default function ProtectedRoute({ children }) {
  // 로그인 성공한 유저의 정보를 Store에서 받아옴(이 방식은 새로고침 시 로그아웃)
  // => 추후 response 에서 로그인 정보를 확인하는 식으로 수정
  // => 혹은 새로고침 시 자동으로 1회 유저정보를 response에서 등록하는 함수를 작성
  const { email } = useSelector((state) => {
    return state.userInfo;
  });
  // 로그인 한 유저가 아니라면, 홈페이지로 라우팅
  if (email === "") {
    return (
      <Modal
        texts={[
          "you can't see other's profile without login.",
          "please log in first.",
        ]}
        btnContent1="OK"
        link1="/waffles"
        isBtn2={false}
      />
    );
  }
  return children;
}
