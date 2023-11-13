import styled from "styled-components";
import { Outlet, useParams } from "react-router-dom";
import Profile from "../components/members/profile";
import MiddleNav from "../components/navs/middle-nav";

const Wrapper = styled.div`
  margin: 10px 0px;
`;

export default function Member() {
  const { memberId } = useParams();

  // 버튼 관련 로직은 나중에 짤것...
  const btns = [
    {
      name: "Posts",
      display: "block",
    },
    {
      name: "Replies",
      display: "none",
    },
    {
      name: "Likes",
      display: "none",
    },
  ];

  // memberId 기준으로 axios 통신해서 멤버 정보 받아오기 && 프로파일과 outlet에 넘기기 api: /members/:memberId

  return (
    <Wrapper>
      <Profile memberId={memberId} />
      <MiddleNav btns={btns} />
      <Outlet />
    </Wrapper>
  );
}
