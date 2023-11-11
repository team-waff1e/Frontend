import { Container, SideNavBtn, Wrapper } from "./side-nav-form";
import { useSelector } from "react-redux";

// 각 버튼에 맞는 페이지 만들기 => 추가 페이지, 라우팅 수정 필요, 회의 후 실제 만들 페이지 선정
// 프로필로 이동하는 버튼의 경우, 넘겨 줄 props 재성이와 상의하기
export default function SideNav() {
  const memberId = useSelector((state) => {
    return state.user.memberId;
  });

  // 마지막 버튼 클릭시, 토글창 열리도록 하는 로직 (onToggle)

  // 토글창 설정 버튼 클릭시 members/:memberId/edit 으로 Link 하는 로직 (onClick)

  // 토글창 로그아웃 버튼 클릭시 확인 모달 띄우는 로직
  // => 모달에서 확인 입력시 로그아웃 및 홈화면으로 Link

  // 토클창에서 설정(profile edit), 로그아웃으로 Link 하는 버튼 만들기
  return (
    <Wrapper>
      <Container>
        <SideNavBtn
          to="/"
          src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
        />
        <SideNavBtn
          to="/waffles"
          src="https://cdn-icons-png.flaticon.com/512/7606/7606136.png"
        />
        <SideNavBtn
          to={`/members/${memberId}`}
          src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"
        />
        <SideNavBtn src="https://cdn.icon-icons.com/icons2/2717/PNG/512/dots_three_icon_173865.png" />
      </Container>
    </Wrapper>
  );
}
