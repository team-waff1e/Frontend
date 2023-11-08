import styled from "styled-components";
import Profile from "../components/profile";
import MiddleNav from "../components/middle-nav";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  margin: 10px 0px;
`;

export default function Member() {
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
  return (
    <Wrapper>
      <Profile />
      <MiddleNav btns={btns} />
      <Outlet />
    </Wrapper>
  );
}
