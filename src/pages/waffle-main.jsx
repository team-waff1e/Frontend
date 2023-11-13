import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideNav from "../components/navs/side-nav";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
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
