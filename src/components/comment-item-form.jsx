import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 1fr;
  border: 1px solid rgb(255, 240, 199);
  border-top: none;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
`;

export const Contents = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  padding: 5px;
`;
