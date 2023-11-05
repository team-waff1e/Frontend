import { useNavigate } from "react-router-dom";
import { Container, Img, Wrapper } from "./side-nav-form";
import { useCallback } from "react";

// 각 버튼에 맞는 페이지 만들기 => 추가 페이지, 라우팅 수정 필요, 회의 후 실제 만들 페이지 선정
// 프로필로 이동하는 버튼의 경우, 넘겨 줄 props 재성이와 상의하기
export default function SideNav() {
  const navigate = useNavigate();
  const onClick = useCallback(
    (e) => {
      const { to } = e.target.dataset;
      navigate(to);
    },
    [navigate]
  );

  return (
    <Wrapper>
      <Container>
        <Img
          onClick={onClick}
          data-to="/"
          src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
        />
        <Img
          onClick={onClick}
          data-to="/waffles"
          src="https://cdn-icons-png.flaticon.com/512/7606/7606136.png"
        />
        <Img src="https://static.vecteezy.com/system/resources/thumbnails/001/504/972/small/search-icon-free-vector.jpg" />
        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5jhkxwkNqni1JexiCUd4_PfQec-nxCEeNw&usqp=CAU" />
        <Img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/alarm_alert_attention_bell_clock_notification_ring_icon_123203.png" />
        <Img src="https://cdn.icon-icons.com/icons2/2348/PNG/512/settings_preferences_icon_142972.png" />
        <Img
          onClick={onClick}
          data-to="/members/{member.id}"
          src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"
        />
        <Img src="https://cdn.icon-icons.com/icons2/2717/PNG/512/dots_three_icon_173865.png" />
      </Container>
    </Wrapper>
  );
}
