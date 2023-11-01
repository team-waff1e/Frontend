import { Outlet } from "react-router-dom";
import SideNav from "../components/side-nav";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 80%;
`;

export default function WaffleMain() {
  return (
    <Wrapper>
      <div className="sidenav">
        <SideNav />
      </div>
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
}
