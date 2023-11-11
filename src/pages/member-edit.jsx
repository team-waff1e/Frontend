import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0px;
`;

export default function MemberEdit() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
