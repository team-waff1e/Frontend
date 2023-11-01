import { Outlet } from "react-router-dom";
import SideNav from "../components/side-nav";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function WaffleMain() {
  return (
    <Wrapper>
      <SideNav />
      <Outlet />
    </Wrapper>
  );
}
