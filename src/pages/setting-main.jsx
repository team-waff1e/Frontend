import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0px;
`;

export default function SettingMain() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
